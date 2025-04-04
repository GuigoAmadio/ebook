import React, { useState } from "react";
import livroUm from "../assets/livroUm.png";
import garantia from "../assets/garantia.webp";
import seguro from "../assets/seguro.png";
import coelinho from "../assets/coelinho.png";

export default function Checkout() {
  const [form, setForm] = useState({
    email: "",
    celular: "",
    pagamento: "pix",
    cpf: "",
  });

  const [ultimoPix, setUltimoPix] = useState(0); // timestamp da última geração de PIX

  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQrCodeData] = useState({
    base64: "",
    emv: "",
    vencimento: "",
  });

  const validarCampos = () => {
    const { email, celular, cpf, pagamento } = form;
    if (!email || !celular || !cpf) {
      alert("Preencha todos os campos obrigatórios.");
      return false;
    }

    if (pagamento === "cartao") {
      const campos = [
        "cardNumber",
        "expMonth",
        "expYear",
        "cvv",
        "cardholderName",
      ];
      for (const id of campos) {
        const el = document.getElementById(id);
        if (!el || !el.value.trim()) {
          alert("Preencha todos os dados do cartão.");
          return false;
        }
      }
    }

    return true;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const gerarTokenCartao = async () => {
    const resposta = await fetch(
      "https://homolog.appmax.com.br/api/v3/tokenize/card",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          card: {
            name: document.getElementById("cardholderName")?.value,
            number: document.getElementById("cardNumber")?.value,
            cvv: document.getElementById("cvv")?.value,
            month: Number(document.getElementById("expMonth")?.value),
            year: Number(document.getElementById("expYear")?.value),
          },
        }),
      }
    );

    const dados = await resposta.json();

    if (!dados.token) {
      throw new Error("Token não gerado");
    }
    console.log("Gerado token do cartao:", dados.token);
    return dados.token;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ⛔️ Validação dos campos antes de prosseguir
    if (!validarCampos()) return;

    // 🕒 Bloqueio se tentar gerar novo QR PIX antes de 2 min
    if (form.pagamento === "pix") {
      const agora = Date.now();
      const doisMinutos = 2 * 60 * 1000;

      if (agora - ultimoPix < doisMinutos) {
        const restante = Math.ceil((doisMinutos - (agora - ultimoPix)) / 1000);
        alert(`Aguarde ${restante} segundos antes de gerar um novo QR Code.`);
        return;
      }
    }

    setLoading(true);
    try {
      let token = null;
      if (form.pagamento === "cartao") {
        token = await gerarTokenCartao();
      }

      const res = await fetch(
        "https://us-central1-stripepay-3c918.cloudfunctions.net/api/realizarPagamento",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pagamento: form.pagamento,
            email: form.email,
            celular: form.celular,
            cpf: form.cpf,
            token: token,
          }),
        }
      );

      const data = await res.json();

      if (form.pagamento === "pix") {
        const ref = data.data.pay_reference;

        setQrCodeData({
          base64: data.data.pix_qrcode,
          emv: data.data.pix_emv,
          vencimento: data.data.pix_expiration_date,
        });

        alert("QR Code gerado! Verificando pagamento...");

        // ⏳ Verifica o status a cada 5s até dar 2 minutos
        let tentativas = 0;
        const intervalo = setInterval(async () => {
          tentativas++;

          const check = await fetch(
            "https://us-central1-stripepay-3c918.cloudfunctions.net/api/verificarStatusPix",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ pay_reference: ref }),
            }
          );

          const status = await check.json();

          if (status.status === "approved") {
            clearInterval(intervalo);
            alert("Pagamento via PIX confirmado! Enviando ebook...");

            await fetch(
              "https://us-central1-stripepay-3c918.cloudfunctions.net/api/enviarEbook",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: form.email }),
              }
            );
            alert("Ebook enviado com sucesso!");
          } else if (tentativas >= 24) {
            clearInterval(intervalo);
            alert(
              "Tempo limite de espera excedido. Tente novamente mais tarde."
            );
          }
        }, 5000);
      } else if (data?.success === "ATIVA" || data?.status === "approved") {
        alert("Pagamento com cartão aprovado!");

        // Envia o ebook por email
        await fetch(
          "https://us-central1-stripepay-3c918.cloudfunctions.net/api/enviarEbook",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: form.email }),
          }
        );

        alert("Ebook enviado para seu email! 📘");
      } else {
        alert("Erro no pagamento: " + (data.message || "Falha ao processar"));
      }
    } catch (error) {
      alert("Erro ao processar pagamento.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20 flex flex-col items-center lg:flex-row lg:items-start gap-10">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
          <h1 className="text-xl font-bold">Finalizar Compra</h1>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            className="input w-full"
            required
          />

          <input
            name="celular"
            type="tel"
            value={form.celular}
            onChange={handleChange}
            placeholder="Celular com DDD"
            className="input w-full"
            required
          />
          <input
            name="cpf"
            type="cpf"
            value={form.cpf}
            onChange={handleChange}
            placeholder="Preencher com seu CPF"
            className="input w-full"
            required
          />

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setForm({ ...form, pagamento: "pix" })}
              className={`flex-1 p-3 rounded border ${
                form.pagamento === "pix"
                  ? "bg-green-700 text-white"
                  : "bg-white"
              }`}
            >
              PIX
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, pagamento: "cartao" })}
              className={`flex-1 p-3 rounded border ${
                form.pagamento === "cartao"
                  ? "bg-green-700 text-white"
                  : "bg-white"
              }`}
            >
              Cartão
            </button>
          </div>

          {form.pagamento === "cartao" && (
            <div className="space-y-3">
              <input
                id="cardNumber"
                placeholder="Número do cartão"
                className="input w-full"
                required
              />
              <div className="flex gap-2">
                <input
                  id="expMonth"
                  placeholder="Mês"
                  className="input w-1/3"
                  required
                />
                <input
                  id="expYear"
                  placeholder="Ano"
                  className="input w-1/3"
                  required
                />
                <input
                  id="cvv"
                  placeholder="CVV"
                  className="input w-1/3"
                  required
                />
              </div>
              <input
                id="cardholderName"
                placeholder="Nome no cartão"
                className="input w-full"
                required
              />
            </div>
          )}
          {form.pagamento === "pix" && (
            <div className="mt-4 p-4 border-2 border-dashed border-green-700 text-sm rounded-md space-y-4">
              <p>✅ Liberação imediata</p>
              <p>✅ Pague escaneando o QR Code abaixo</p>
            </div>
          )}
          {form.pagamento === "pix" && qrCodeData.base64 != "" && (
            <div className="mt-4 space-y-2 border border-green-700 rounded-lg p-4">
              <p className="text-sm">✅ Pagamento gerado via Pix</p>
              <img
                src={`data:image/png;base64,${qrCodeData.base64}`}
                alt="QR Code PIX"
                className="mx-auto max-w-xs border rounded-md"
              />
              <p className="text-xs break-words text-center">
                {qrCodeData.emv}
              </p>
              <p className="text-xs text-center text-gray-500 mt-2">
                Válido até:{" "}
                {new Date(qrCodeData.vencimento).toLocaleString("pt-BR")}
              </p>
            </div>
          )}

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              <img src={coelinho} alt="" className="size-6" />
              <h2 className="font-extrabold text-neutral-600">
                Lucrando com a pascoa
              </h2>
            </div>
            <p className="text-neutral-800 text-sm my-3">
              Este pagamento esta sendo processado com seguranca pela AppMax
            </p>
            <div className="flex items-center mb-4">
              <img src={seguro} alt="" className="size-3 mr-2" />
              <h3 className="text-green-500 text-sm">Compra 100% segura!</h3>
            </div>
            <p className="text-xs mb-2">
              Este site é protegido pelo reCAPTCHA do Google
            </p>
            <p className="text-xs">
              <span className="font-bold">Política de privacidade</span> e{" "}
              <span className="font-bold">Termos de serviço</span>
            </p>
          </div>
        </div>
        <section className="flex flex-col gap-2 justify-start items-center rounded-xl w-96 px-4 py-10 bg-white shadow-md my-10 lg:my-0">
          <h1 className="font-bold text-2xl">Resumo da compra</h1>
          <div className="px-10 my-10 flex justify-between items-start w-full">
            <p className="font-medium">Items:</p>
            <div className="flex flex-col items-end gap-4">
              <p className="font-bold">Lucrando com a Pascoa</p>
              <img src={livroUm} alt="" className="w-[100px]" />
            </div>
          </div>
          <div className="flex justify-between w-full px-10">
            <p className="font-medium">Valor do produto:</p>
            <p className="font-bold">R$21,80</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p className="font-medium">Descontos:</p>
            <p className="font-bold">R$0,00</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p className="font-medium">Taxas de entrega:</p>
            <p className="font-bold">R$0,00</p>
          </div>

          <div className="mt-10 flex justify-between w-full px-10">
            <p className="font-medium">Total a ser pago:</p>
            <p className="font-bold text-green-500">R$21,80</p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-3 rounded font-semibold my-10 shadow-md shadow-neutral-600"
          >
            {loading ? "Processando..." : "Finalizar Pagamento"}
          </button>
          <img src={garantia} alt="" className="w-40 mt-4" />
        </section>
      </div>
    </form>
  );
}
