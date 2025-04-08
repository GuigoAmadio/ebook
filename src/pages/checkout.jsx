import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import ProdutosCard from "../components/ProdutosCard";
import ResumoCompra from "../components/ResumoCompra";

import capaPrincipal from "../assets/capaPrincipal.jpg";
import capaFitness from "../assets/capaFitness.jpg";
import capaGourmet from "../assets/capaGourmet.png";
import capaExcell from "../assets/capaExcell.jpg";

export default function Checkout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const todosProdutos = [
    {
      id: "pascoa",
      nome: "Lucrando com a Páscoa",
      precoOriginal: 71.9,
      precoAtual: 16.9,
      imagem: capaPrincipal,
    },
    {
      id: "admin",
      nome: "Planilha Detalhada de Gastos",
      precoOriginal: 22.2,
      precoAtual: 2.9,
      imagem: capaExcell,
    },
    {
      id: "fit",
      nome: "Guia de 8 Ovos Fitness High Protein",
      precoOriginal: 25.9,
      precoAtual: 4.9,
      imagem: capaFitness,
    },
    {
      id: "gourmet",
      nome: "Receita de 10 Ovos Gourmet Para Impressionar",
      precoOriginal: 25.9,
      precoAtual: 4.9,
      imagem: capaGourmet,
    },
  ];

  const [form, setForm] = useState({
    email: "",
    celular: "",
    cpf: "",
    pagamento: "pix",
  });

  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [pagamentoStatus, setPagamentoStatus] = useState(null); // null | "loading" | "success" | "erro"
  const [upsellUrl, setUpsellUrl] = useState("");
  const [qrCodeData, setQrCodeData] = useState(null);
  const [ultimoPix, setUltimoPix] = useState(0); // timestamp do último Pix gerado

  useEffect(() => {
    const produtosQuery = queryParams.get("produtos");
    let selecionados = produtosQuery
      ? produtosQuery
          .split(",")
          .filter((id) => todosProdutos.some((p) => p.id === id))
      : [];

    if (!selecionados.includes("pascoa")) {
      selecionados = ["pascoa", ...selecionados];
    }

    setProdutosSelecionados(selecionados);
  }, [location.search]);

  const alternarProduto = (id) => {
    setProdutosSelecionados((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const selecionados = todosProdutos.filter((p) =>
    produtosSelecionados.includes(p.id)
  );
  const totalOriginal = selecionados.reduce(
    (acc, p) => acc + p.precoOriginal,
    0
  );
  const totalAtual = selecionados.reduce((acc, p) => acc + p.precoAtual, 0);
  const descontoTotal = totalOriginal - totalAtual;

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

    const data = await resposta.json();
    if (!data.token) throw new Error("Token não gerado");
    return data.token;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarCampos()) return;

    // Bloquear múltiplas gerações de Pix por 2 minutos
    if (form.pagamento === "pix") {
      const agora = Date.now();
      const doisMinutos = 2 * 60 * 1000;

      if (agora - ultimoPix < doisMinutos) {
        const restante = Math.ceil((doisMinutos - (agora - ultimoPix)) / 1000);
        alert(`Aguarde ${restante} segundos antes de gerar um novo QR Code.`);
        return;
      }

      setUltimoPix(agora);
    }

    setPagamentoStatus("loading");

    try {
      let token = null;
      if (form.pagamento === "cartao") {
        token = await gerarTokenCartao();
      }

      const resposta = await fetch("https://seu-backend.com/api/pagar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          produtos: produtosSelecionados,
          total: totalAtual,
          token,
        }),
      });

      const json = await resposta.json();

      if (form.pagamento === "pix" && json?.data?.pix_qrcode) {
        // Armazena QR code e inicia verificação de pagamento
        setQrCodeData({
          base64: json.data.pix_qrcode,
          emv: json.data.pix_emv,
          vencimento: json.data.pix_expiration_date,
        });

        const ref = json.data.pay_reference;

        let tentativas = 0;
        const intervalo = setInterval(async () => {
          tentativas++;
          const check = await fetch(
            "https://seu-backend.com/api/verificarStatusPix",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ pay_reference: ref }),
            }
          );

          const status = await check.json();

          if (status.status === "approved") {
            clearInterval(intervalo);
            setPagamentoStatus("success");
          } else if (tentativas >= 24) {
            clearInterval(intervalo);
            setPagamentoStatus("erro");
            alert("Pagamento Pix não confirmado a tempo. Tente novamente.");
          }
        }, 5000);
      } else if (json.status === "aprovado") {
        if (json.upsell_url) {
          setUpsellUrl(json.upsell_url);
        } else {
          setPagamentoStatus("success");
        }
      } else {
        alert("Erro no pagamento. Tente novamente.");
        setPagamentoStatus("erro");
      }
    } catch (err) {
      console.error("Erro:", err);
      alert("Erro ao processar o pagamento.");
      setPagamentoStatus("erro");
    }
  };

  // Tela de upsell
  if (upsellUrl) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-10">
        <h1 className="text-xl font-bold mb-6">
          🎁 Oferta Especial para Você!
        </h1>
        <iframe
          src={upsellUrl}
          className="w-full max-w-3xl h-[700px] rounded-lg shadow-xl border"
          title="Upsell Appmax"
        />
        <p className="text-sm mt-6 text-gray-600">
          Caso não deseje, basta fechar a aba.
        </p>
      </div>
    );
  }

  // Tela de sucesso
  if (pagamentoStatus === "success") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
        <h1 className="text-2xl font-bold text-green-700">
          ✅ Pagamento Aprovado!
        </h1>
        <p className="mt-4">
          Seu eBook já foi enviado para o e-mail <strong>{form.email}</strong>.
        </p>
        <p className="mt-2 text-gray-500">Obrigado por comprar com a gente!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        <CheckoutForm form={form} setForm={setForm} />
        <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
          <h2 className="text-lg font-semibold">
            Adicione outros eBooks à sua compra
          </h2>
          <ProdutosCard
            produtos={todosProdutos.filter((p) => p.id !== "pascoa")}
            produtosSelecionados={produtosSelecionados}
            onToggle={alternarProduto}
          />
        </div>
      </div>

      <ResumoCompra
        selecionados={selecionados}
        totalOriginal={totalOriginal}
        totalAtual={totalAtual}
        descontoTotal={descontoTotal}
        pagamento={form.pagamento}
        onSubmit={handleSubmit}
        loading={pagamentoStatus === "loading"}
        qrCodeData={qrCodeData}
      />
    </div>
  );
}
