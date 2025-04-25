import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import calcinha from "../assets/calcinha.png";

const perguntas = [
  {
    pergunta:
      "O que ela faz quando percebe que você se importa mais do que ela?",
    opcoes: [
      "🧊 Some e finge que nem existo.",
      "🕸️ Usa isso pra me manter ali.",
      "🧪 Se aproveita, mas continua distante.",
      "🧠🚬 Percebe que não tem controle. Eu já recuei e sumi.",
    ],
  },
  {
    pergunta:
      "Você já se sentiu invisível quando entra em uma roda cheia de mulheres?",
    opcoes: [
      "👻 Sempre.",
      "😶 Quase sempre.",
      "😐 Às vezes.",
      "👊 Não. Eu faço elas me notarem.",
    ],
  },
  {
    pergunta:
      "Você já se arrependeu de não ter falado algo quando teve a chance?",
    opcoes: [
      "😩 Todo dia.",
      "😔 Algumas vezes.",
      "😶 Poucas vezes.",
      "🗣️ Hoje eu falo antes mesmo dela pensar.",
    ],
  },
  {
    pergunta:
      "Como você se sente depois de ser ignorado por alguém que mal te conhece?",
    opcoes: [
      "🗑️ Um lixo. Fico remoendo dias.",
      "😞 Reflito e fico na bad.",
      "😐 Tento fingir que não me importo.",
      "🧠 Eu percebo que perdi tempo. Ignorar quem nao me quer ao lado é livramento.",
    ],
  },
  {
    pergunta:
      "O que você faria se tivesse o mapa mental das mulheres e soubesse exatamente o que dizer em cada momento?",
    opcoes: [
      "🫣 Ia usar com medo de errar.",
      "🤞 Tentaria aos poucos.",
      "🤫 Usaria, mas com cautela.",
      "🧠 Usaria como arma. Ninguém mais me domina.",
    ],
  },
];

export default function Quiz() {
  const [indexAtual, setIndexAtual] = useState(-1); // -1 mostra o botão inicial
  const navigate = useNavigate();

  const iniciarQuiz = () => setIndexAtual(0);

  const proximaPergunta = () => {
    if (indexAtual + 1 < perguntas.length) {
      setIndexAtual(indexAtual + 1);
    } else {
      navigate("/landingPage");
    }
  };

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
          {/* Barra de progresso */}
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
                onClick={proximaPergunta}
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
