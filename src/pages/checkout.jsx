import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import ProdutosCard from "../components/ProdutosCard";
import ResumoCompra from "../components/ResumoCompra";
import ebookPrincipal from "../assets/ebookPrincipal.webp";
import ebookSocial from "../assets/ebookSocial.webp";
import ebookTecnicas from "../assets/ebookTecnicas.webp";
import ebookBiologico from "../assets/ebookBiologico.webp";
import bau_checkout from "../assets/bau_checkout.png";
import { enviarEventoPixel, registrarLog, enviarLogs } from "../utils/utils";

export default function Checkout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const produtoPrincipal = {
    sku: "MANUAL-001",
    name: "Manual da Seducao",
    soft_descriptor: "Manual",
  };

  const todosProdutos = [
    {
      id: "main",
      nome: "Manual Secreto da Seducao",
      precoOriginal: 71.9,
      precoAtual: 21.9,
      imagem: ebookPrincipal,
    },
    {
      id: "biologico",
      nome: "Instinto de Seducao",
      precoOriginal: 47.2,
      precoAtual: 4.9,
      imagem: ebookBiologico,
    },
    {
      id: "sociologico",
      nome: "Jogo Invisivel",
      precoOriginal: 44.9,
      precoAtual: 4.9,
      imagem: ebookSocial,
    },
    {
      id: "pratico",
      nome: "Arsenal da Atracao",
      precoOriginal: 45.9,
      precoAtual: 4.9,
      imagem: ebookTecnicas,
    },
  ];

  const [form, setForm] = useState({
    email: "",
    celular: "",
    cpf: "",
    pagamento: "pix",
  });

  const inicio = useRef(Date.now());
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [orderID, setOrderID] = useState("");
  const [pagamentoStatus, setPagamentoStatus] = useState(null); // null | "loading" | "success" | "erro"
  const [qrCodeData, setQrCodeData] = useState(null);
  const [ultimoPix, setUltimoPix] = useState(0); // timestamp do último Pix gerado
  const logEnviado = useRef(false);

  useEffect(() => {
    // COMECANDO LOGS MEUS
    //
    const dadosQuiz = JSON.parse(sessionStorage.getItem("checkout")) || {};

    if (dadosQuiz.Entrada) {
      console.log("⚠️ Parâmetros já salvos anteriormente.");
      return;
    }
    const origem = queryParams.get("origem") || "desconhecida";

    registrarLog("checkout", "Entrada", {
      mensagem: "Usuário entrou na página de checkout",
      origem,
    });

    console.log("refistrei entrada no checkout.");
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      if (logEnviado.current) return;
      logEnviado.current = true;

      const tempoTotal = Math.floor((Date.now() - inicio.current) / 1000);
      console.log("🚪 Usuário está saindo do checkout.");

      registrarLog("checkout", "Saida", {
        mensagem: "Usuário saiu do checkout",
        tempoTotal,
      });
      enviarLogs("quiz", "landingPage", "checkout");
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        handleUnload();
      }
    };

    // Eventos para garantir compatibilidade com todos os dispositivos
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("pagehide", handleUnload);
    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("pagehide", handleUnload);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  

  useEffect(() => {
    // ✅ Evita envio duplicado para o Pixel
    if (sessionStorage.getItem("pixelEnviado")) return;
    sessionStorage.setItem("pixelEnviado", "true");

    // ✅ Configuração dos produtos selecionados no checkout
    const produtosQuery = queryParams.get("produtos");
    let selecionados = produtosQuery
      ? produtosQuery
          .split(",")
          .filter((id) => todosProdutos.some((p) => p.id === id))
      : [];

    if (!selecionados.includes("main")) {
      selecionados = ["main", ...selecionados];
    }
    setProdutosSelecionados(selecionados);

    // ✅ Configuração e disparo do Pixel
    const pixelScript = document.createElement("script");
    pixelScript.async = true;
    pixelScript.defer = true;
    pixelScript.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
    window.pixelId = "68103089634d3f0bac4be54a";
    document.head.appendChild(pixelScript);

    enviarEventoPixel("ViewContent", totalAtual, selecionados);
  }, []);

  const alternarProduto = async (id) => {
    const novoSelecionados = produtosSelecionados.includes(id)
      ? produtosSelecionados.filter((p) => p !== id)
      : [...produtosSelecionados, id];

    setProdutosSelecionados(novoSelecionados);

    // Cálculo direto dos produtos completos e total
    const produtosCompletos = todosProdutos.filter((p) =>
      novoSelecionados.includes(p.id)
    );
    const valorTotal = produtosCompletos.reduce(
      (total, p) => total + p.precoAtual,
      0
    );

    enviarEventoPixel("AddToCart", valorTotal, novoSelecionados);
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
      "https://us-central1-stripepay-3c918.cloudfunctions.net/api/tokenizarCartao",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: document.getElementById("cardholderName")?.value,
          number: document.getElementById("cardNumber")?.value,
          cvv: document.getElementById("cvv")?.value,
          month: Number(document.getElementById("expMonth")?.value),
          year: Number(document.getElementById("expYear")?.value),
        }),
      }
    );

    const dados = await resposta.json();
    if (!dados.data.token) {
      throw new Error("Token não gerado eis o motivo:", dados.error);
    }

    return dados.data.token;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarCampos()) return;

    enviarEventoPixel("InitiateCheckout", totalAtual, produtosSelecionados);

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

      const resposta = await fetch(
        "https://us-central1-stripepay-3c918.cloudfunctions.net/api/realizarPagamento",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            cvv: document.getElementById("cvv")?.value,
            produtos: produtosSelecionados,
            token,
            total: totalAtual,
            product: produtoPrincipal,
          }),
        }
      );
      const json = await resposta.json();
      setOrderID(json.orderId);

      const processarSucesso = () => {
        setPagamentoStatus("success");
        window.history.replaceState({}, "", "?status=sucesso");
        enviarEventoPixel("Purchase", totalAtual, produtosSelecionados);
      };

      if (form.pagamento === "pix" && json?.data?.pix_qrcode) {
        // Armazena QR code e inicia verificação de pagamento
        setQrCodeData({
          base64: json.data.pix_qrcode,
          emv: json.data.pix_emv,
          vencimento: json.data.pix_expiration_date,
        });

        const MAX_TEMPO = 10 * 60 * 1000; // 10 minutos
        const INTERVALO = 5000; // 5 segundos
        let tentativas = 0;
        const maxTentativas = MAX_TEMPO / INTERVALO;

        const loop = setInterval(async () => {
          tentativas++;

          try {
            const resposta = await fetch(
              "https://us-central1-stripepay-3c918.cloudfunctions.net/verificarPagamento",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: json.orderId,
                }),
              }
            );

            const resposta2 = await resposta.json();

            if (resposta2.status === "aprovado") {
              clearInterval(loop);
              processarSucesso();
            } else if (tentativas >= maxTentativas) {
              clearInterval(loop);
              alert("❌ Pagamento via Pix não foi confirmado em 10 minutos.");
              setPagamentoStatus("erro");
            }
          } catch (erro) {
            console.error("Erro ao verificar Pix:", erro);
          }
        }, INTERVALO);

        // Fazer requisicao de checkagem para meu banco de dados.
      } else if (json.status === "aprovado") {
        processarSucesso();
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

  if (pagamentoStatus === "success") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
        <h1 className="text-2xl font-bold text-green-700">
          ✅ Pagamento Aprovado!
        </h1>
        <p className="mt-2 font-medium">
          Seu eBook já foi enviado para o e-mail <strong>{form.email}</strong>.
        </p>
        <p className="mt-2 font-medium">
          Guarde este Id caso precise falar conosco: <br /> {orderID}
        </p>
        <p className="mt-2 text-gray-500">Obrigado por comprar com a gente!</p>
      </div>
    );
  }
  if (pagamentoStatus === "erro") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
        <h1 className="text-2xl font-bold text-green-700">
          Algo deu errado🚫!
        </h1>
        <p className="mt-2 font-medium">
          O pagamento nao foi bem concluido, tente novamente.
        </p>
        <button
          onClick={() => setPagamentoStatus(null)} // 👈 reseta o status aqui
          className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col lg:flex-row gap-10 min-h-screen bg-orange-950 p-4 md:p-10 z-20">
      <div className="relative flex flex-col items-center">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r -left-16 -top-10 from-red-700 to-amber-700 opacity-70 blur-2xl z-10"></div>
        <img src={bau_checkout} alt="" className="relative size-64 z-20 " />
        <h1 className="font-bold text-white text-2xl mx-2 text-center z-20 relative">
          Nem todos têm acesso ao que está aqui... Mas você está a um passo de
          descobrir.
        </h1>
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-2/3 z-20 pt-8">
        <div className="bg-orange-950 p-4 rounded-xl space-y-4">
          <h2 className="text-xl text-orange-300 font-bold text-center">
            Aproveite e leve também:
          </h2>
          <h2 className="text-md text-orange-300 font-bold text-center">
            *Clique para adicionar ou remover do carrinho*
          </h2>
          <ProdutosCard
            produtos={todosProdutos.filter((p) => p.id !== "main")}
            produtosSelecionados={produtosSelecionados}
            onToggle={alternarProduto}
          />
        </div>

        <ResumoCompra
          selecionados={selecionados}
          totalOriginal={totalOriginal}
          totalAtual={totalAtual}
          descontoTotal={descontoTotal}
        />
      </div>
      <CheckoutForm
        qrCodeData={qrCodeData}
        orderID={orderID}
        loading={pagamentoStatus === "loading"}
        onSubmit={handleSubmit}
        pagamento={form.pagamento}
        form={form}
        setForm={setForm}
      />
    </div>
  );
}
