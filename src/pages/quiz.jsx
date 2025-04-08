import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coelho from "../assets/coelho.png";

const perguntas = [
  {
    pergunta:
      "Você já pensou em ganhar dinheiro com algo seu, mas travou antes de começar?",
    opcoes: [
      "😩 Sim, me sinto travada",
      "🤷‍♀️ Às vezes tenho vontade, mas não sei por onde comecar",
      "💭 Já pensei, mas não fiz nada ainda",
      "😎 Não, já tentei algumas coisas",
    ],
  },
  {
    pergunta:
      "Se você pudesse lucrar com a Páscoa, trabalhando de casa, isso te ajudaria hoje?",
    opcoes: [
      "🙋‍♀️ Com certeza, seria perfeito pra mim agora",
      "😍 Sim, daria a renda extra que eu preciso",
      "🤔 Talvez, se não for complicado",
      "🤨 Não sei se daria certo pra mim",
    ],
  },
  {
    pergunta:
      "O que mais te impede de começar algo que gere dinheiro pra você hoje?",
    opcoes: [
      "😬 Nao saber por onde comecar.",
      "💸 Medo de gastar dinheiro e não vender",
      "🧾 Não entendo nada de negócios",
      "😩 Falta de tempo ou motivação",
    ],
  },
  {
    pergunta:
      "Se existise um metodo facil, receitas prontas e um plano passo a passo, voce usaria para faturar na Pascoa?",
    opcoes: [
      "💪 Seguiria sem pensar",
      "🙌 Se for simples, tô dentro!",
      "🤷‍♀️ Talvez… depende de como funciona",
      "🤯 Parece muito complicado",
    ],
  },
  {
    pergunta:
      "Se tudo ja estivesse pronto, apenas esperando alguem para assumir e lucrar nesta Pascoa, o que voce faria?",
    opcoes: [
      "😍 Eu começaria agora mesmo",
      "🤔 Acho que nao seria para mim",
      "🙋‍♀️ Com certeza iria tentar",
      "😓 Ainda assim teria medo de não conseguir",
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
            Aprenda a faturar com Ovos de Pascoa Caseiros Irresistiveis!
            <br /> Mesmo nao tendo experiência de vendas
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            Responda 5 perguntas simples ✨ e descubra como transformar sua
            criatividade em lucro com ovos de Páscoa
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
