import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import q1 from "../assets/q1.jpg";
import q2 from "../assets/q2.jpg";
import q3 from "../assets/q3.jpg";
import q4 from "../assets/q4.jpg";
import q5 from "../assets/q5.jpg";

const perguntas = [
  {
    pergunta: "Voce se sente satisfeito com o quanto ganha mensalmente?",
    imagem: q1,
    opcoes: ["Sim", "Nao", "Um pouco", "Nao sei"],
  },
  {
    pergunta: "Você prefere trabalhar...",
    imagem: q2,
    opcoes: [
      "Sozinho com foco total",
      "Com outras pessoas trocando ideias",
      "Na rua conhecendo lugares",
      "Em um ambiente dinâmico com desafios",
    ],
  },
  {
    pergunta: "Qual dessas áreas mais te atrai?",
    imagem: q3,
    opcoes: ["Arte & Design", "Tecnologia", "Negócios", "Ciência"],
  },
  {
    pergunta: "Seu passatempo favorito seria:",
    imagem: q4,
    opcoes: [
      "Ler ou escrever",
      "Montar algo",
      "Fotografar",
      "Jogar e programar",
    ],
  },
  {
    pergunta: "O que mais te motiva?",
    imagem: q5,
    opcoes: [
      "Desafios criativos",
      "Resolução de problemas",
      "Reconhecimento",
      "Liberdade e flexibilidade",
    ],
  },
];

export default function Quiz() {
  const [indexAtual, setIndexAtual] = useState(0);
  const navigate = useNavigate();

  const proximaPergunta = () => {
    if (indexAtual + 1 < perguntas.length) {
      setIndexAtual(indexAtual + 1);
    } else {
      navigate("/landingPage");
    }
  };

  return (
    <div className="min-h-screen bg-orange-200 flex flex-col items-center justify-start gap-20 p-6">
      <h1 className="mt-10 text-[5vh] font-bold text-center mx-auto">
        Responda a estas <span className="text-lime-500">5 perguntas </span> e
        descubra oportunidades de{" "}
        <span className="text-lime-500">aumentar a sua renda</span> este mes:
      </h1>
      <div className="bg-neutral-200 p-8 max-w-xl w-full text-center space-y-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {perguntas[indexAtual].pergunta}
        </h1>
        <img
          src={perguntas[indexAtual].imagem}
          alt=""
          className="size-48 rounded-xl"
        />
        <div className="w-full grid grid-cols-1 gap-9 place-items-center">
          {perguntas[indexAtual].opcoes.map((opcao, i) => (
            <button
              key={i}
              onClick={proximaPergunta}
              className="py-3 px-6 w-2/3 bg-lime-500 border-2 border-gray-200 text-neutral-700 shadow-lg shadow-neutral-400 rounded-2xl font-bold transition duration-200 hover:bg-lime-400 hover:scale-105"
            >
              {opcao}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
