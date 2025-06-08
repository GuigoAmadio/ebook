import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import calcinha from "../assets/calcinha.webp";
import {
  registrarLog,
  salvarDados,
  enviarLogs,
  obterSalvarParametrosUrl,
  enviarRespostasComBeacon,
  incrementarRespostasQuiz,
} from "../utils/utils";
import { LazyLandingPage } from "../App"; // Importa para fazer o preload

const perguntas = [
  {
    pergunta:
      "Qual dessas situações você já passou ao tentar se conectar com uma mulher?",
    opcoes: [
      "😶‍🌫️ Não consegui puxar assunto e ela perdeu o interesse",
      "🧊 Fiquei nervoso e acabei parecendo frio ou distante",
      "😅 Senti que estava me esforçando muito e ela se afastou",
      "🔥 Consegui prender a atenção dela, mas depois não soube manter",
    ],
  },
  {
    pergunta:
      "Você já se sentiu invisível quando entra em uma roda cheia de mulheres?",
    opcoes: [
      "😅 Nunca, sempre falam comigo",
      "😐 Às vezes",
      "😑 Ja, mais de uma vez",
      "😓 Uma vez",
    ],
  },
  {
    pergunta:
      "Você já se arrependeu de não ter falado algo quando teve a chance?",
    opcoes: [
      "🫡 Nunca me ocorreu",
      "😔 Algumas vezes",
      "😶 Uma vez",
      "🤯 Fico remoendo por DIAS",
    ],
  },
  {
    pergunta: "E se você pudesse criar desejo sem dizer uma palavra?",
    opcoes: [
      "🥲 Seria ainda incapaz de fazer elas se apaixonar por mim",
      "👀 Tentaria discretamente",
      "🔥 Eu aproveitaria e faria ela se perguntar como me percebeu",
      "😅 Não preciso criar desejo em ninguém",
    ],
  },
  {
    pergunta:
      "O que você faria se tivesse o mapa mental das mulheres e soubesse exatamente o que dizer em cada momento?",
    opcoes: [
      "🎉 Ia usar sem parar",
      "🤞 Continuaria sendo ignorado",
      "🙌 Me sentiria mais confiante",
      "🫡 Não sei se é para mim",
    ],
  },
];

export default function Quiz() {
  const [indexAtual, setIndexAtual] = useState(-1);
  const [respostas, setRespostas] = useState([]);
  const navigate = useNavigate();
  const enviandoBeacon = useRef(false);
  const respostasRef = useRef([]);

  const handleUnload = () => {
    if (enviandoBeacon.current) return;
    enviandoBeacon.current = true;

    enviarLogs("quiz", "landingPage", "checkout");

    const respostasSalvas =
      respostasRef.current.length > 0
        ? respostasRef.current
        : JSON.parse(localStorage.getItem("respostasQuizTemp") || "[]");

    if (
      respostasSalvas.length > 0 &&
      respostasSalvas.length <= perguntas.length
    ) {
      enviarRespostasComBeacon(respostasSalvas);
    }
  };

  useEffect(() => {
    // Verifica se os parâmetros já foram salvos dentro da chave "quiz"
    const dadosQuiz = JSON.parse(sessionStorage.getItem("quiz")) || {};

    if (dadosQuiz.parametrosEntrada) {
      console.log("⚠️ Parâmetros já salvos anteriormente.");
      return;
    }

    // Se não estiverem salvos, captura e salva
    obterSalvarParametrosUrl("quiz");
  }, []);

  useEffect(() => {
    respostasRef.current = respostas;
  }, [respostas]);

  const iniciarQuiz = () => {
    localStorage.removeItem("respostasQuizTemp");
    setIndexAtual(0);

    LazyLandingPage.preload();

    registrarLog("quiz", "iniciarQuiz", {
      mensagem: "Usuário iniciou o quiz",
    });
  };

  const proximaPergunta = (resposta) => {
    if (enviandoBeacon.current) return;

    const novasRespostas = [...respostas, resposta];
    setRespostas(novasRespostas);
    localStorage.setItem("respostasQuizTemp", JSON.stringify(novasRespostas));

    salvarDados("quiz", "respostas", novasRespostas);
    incrementarRespostasQuiz("quiz", "perguntasRespondidas");

    if (indexAtual + 1 < perguntas.length) {
      setIndexAtual(indexAtual + 1);
    } else {
      // se enviandoBeacon eh true
      enviandoBeacon.current = true;

      registrarLog("quiz", "finalizarQuiz", {
        mensagem: "Usuário finalizou o quiz",
      });
      enviarRespostasComBeacon(novasRespostas);
      navigate("/landingPage");
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        console.log("🔄 Página ficou oculta, registrando logs.");
        handleUnload();
      }
    };

    // Adiciona os eventos de saída e mudança de visibilidade
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("pagehide", handleUnload);
    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("pagehide", handleUnload);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-800 flex flex-col items-center justify-start pt-20 gap-10 p-6">
      <div className="bg-pink-200 text-pink-500 font-extrabold text-lg md:text-xl px-6 py-2 rounded-full mb-8 shadow-md border border-pink-500">
        ❤️ Especial Dos Namorados! 🎈
      </div>
      <img
        src={calcinha}
        className="absolute bottom-0 right-0 size-28"
        alt=""
      />

      {indexAtual === -1 ? (
        <div className="text-center space-y-8 max-w-xl">
          <h1 className="text-3xl font-bold text-zinc-200">
            <span className="text-red-500">Descubra</span> o que te torna
            invisível pros olhos dela
            <br /> e aprenda a{" "}
            <span className="text-orange-500">virar o jogo</span> com
            brutalidade.
          </h1>
          <p className="text-gray-300 text-lg font-medium">
            Responda 5 perguntas diretas 🧠 e entenda por que você vive sendo
            ignorado, recusado ou usado — e o que fazer pra se tornar o cara que
            elas não conseguem esquecer.
          </p>
          <button
            onClick={iniciarQuiz}
            className="animate-bounce w-72 px-8 py-3 bg-rose-900 text-white font-medium text-lg rounded-full shadow-xl shadow-rose-800 hover:bg-rose-800 transition"
          >
            Começar agora
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl space-y-6 relative">
          <div className="absolute -top-6 left-0 w-full flex justify-between px-4">
            {[...Array(perguntas.length)].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-1/5 mx-1 rounded-full transition-all ${
                  i <= indexAtual ? "bg-rose-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-right text-gray-600 font-medium">
            {indexAtual + 1}/{perguntas.length}
          </p>
          <h2 className="text-xl font-bold text-gray-800 text-center">
            {perguntas[indexAtual].pergunta}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {perguntas[indexAtual].opcoes.map((opcao, i) => (
              <button
                key={i}
                onClick={() => proximaPergunta(opcao)}
                className="py-3 px-6 bg-rose-500 hover:bg-rose-600 text-neutral-800 font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-150"
              >
                {opcao}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
