import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coelho from "../assets/coelho.png";

const perguntas = [
  {
    pergunta: "Você sente que poderia ganhar mais com o que já sabe fazer?",
    opcoes: [
      "Sim, com certeza!",
      "Talvez",
      "Nunca pensei nisso",
      "Acho que não",
    ],
  },
  {
    pergunta: "Qual dessas frases mais combina com você?",
    opcoes: [
      "Quero uma renda extra ainda esse mês",
      "Quero trabalhar por conta própria",
      "Quero aprender algo lucrativo e prático",
      "Quero transformar minha criatividade em dinheiro",
    ],
  },
  {
    pergunta: "Você já pensou em ganhar dinheiro com produtos caseiros?",
    opcoes: [
      "Sim, mas não sabia como começar",
      "Sim, mas tive medo",
      "Não",
      "Já tentei, mas não deu certo",
    ],
  },
  {
    pergunta: "O que você faria com R$ 500 extras esse mês?",
    opcoes: [
      "Ajudaria em casa",
      "Investiria em mim",
      "Compraria algo que desejo",
      "Guardaria para o futuro",
    ],
  },
  {
    pergunta: "Se pudesse aprender uma habilidade lucrativa agora, você:",
    opcoes: [
      "Começaria imediatamente",
      "Teria dúvidas, mas tentaria",
      "Dependeria do investimento",
      "Quero saber mais antes de agir",
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
    <div className="relative min-h-screen bg-orange-100 flex flex-col items-center justify-start pt-20 gap-10 p-6">
      <div className="bg-pink-200 text-pink-500 font-extrabold text-lg md:text-xl px-6 py-2 rounded-full mb-8 shadow-md border border-pink-500">
        🐰 Especial de Páscoa! 🍫
      </div>
      <img src={coelho} className="absolute bottom-0 right-0 size-28" alt="" />
      {indexAtual === -1 ? (
        <div className="text-center space-y-8 max-w-xl">
          <h1 className="text-3xl font-bold text-lime-600">
            Descubra como ganhar dinheiro com algo simples e delicioso!
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            Responda a 5 perguntas rápidas e veja como transformar sua
            criatividade em renda com ovos de Páscoa e muito mais.
          </p>
          <button
            onClick={iniciarQuiz}
            className="animate-bounce w-72 px-8 py-3 bg-lime-500 text-white font-medium text-lg rounded-full shadow-xl shadow-yellow-200 hover:bg-lime-600 transition"
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
                  i <= indexAtual ? "bg-lime-500" : "bg-gray-300"
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
                className="py-3 px-6 bg-lime-400 hover:bg-lime-500 text-neutral-800 font-semibold rounded-lg shadow-sm hover:scale-105 transition duration-150"
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
