import React, { useState } from "react";

import ebookBiologico from "../assets/ebookBiologico.png";
import ebookSocial from "../assets/ebookSocial.png";
import ebookPrincipal from "../assets/ebookPrincipal.png";
import calcinha from "../assets/calcinha.png";

export default function HeroSection({ id, inicio, ultimaSessao }) {
  const irParaCheckout = (origem, produtos) => {
    const tempoTotal = Math.floor((Date.now() - inicio.current) / 1000);
    const sessaoFinal = ultimaSessao.current;

    fetch(
      "https://us-central1-stripepay-3c918.cloudfunctions.net/api/temGenteAquikk",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mensagem: "Foi para o checkout ✅",
          origem,
          sessaoMaisLonge: sessaoFinal,
          tempoTotal,
          timestamp: new Date().toISOString(),
        }),
      }
    ).finally(() => {
      window.location.href = `/checkout?produtos=${encodeURIComponent(
        produtos
      )}&origem=${encodeURIComponent(origem)}`;
    });
  };

  return (
    <section
      id={id}
      className="text-white relative bg-neutral-800 min-h-screen flex flex-col items-center text-center px-4 py-10"
    >
      <h1 className="mt-12 text-[4vh] md:text-[5vh] font-bold">
        A atração não é sorte.<br></br>
      </h1>
      <p className="text-[3vh] w-3/4 md:w-1/2 font-bold">
        <span className="text-red-600 font-extrabold">
          Domine o jogo da atenção e do desejo
        </span>{" "}
        e descubra o que acontece quando voce tem o{" "}
        <span className="text-orange-600">controle</span> dela.
      </p>
      <div className="relative flex justify-center items-center h-auto my-20">
        {/* Glow / Aura */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-rose-800 to-orange-600 opacity-40 blur-2xl z-10"></div>

        {/* Ovos laterais (atrás) */}
        <img
          src={ebookBiologico}
          alt="Ovo esquerdo"
          className="absolute left-1/2 -translate-x-[100%] top-1/2 -translate-y-1/2 w-[160px] md:w-[360px] z-10 -rotate-12"
        />
        <img
          src={ebookSocial}
          alt="Ovo direito"
          className="absolute left-1/2 translate-x-[10%] top-1/2 -translate-y-1/2 w-[160px] md:w-[350px] z-10 rotate-12"
        />

        {/* Ovo central (na frente) */}
        <img
          src={ebookPrincipal}
          alt="Ovo central"
          className="relative z-20 w-[200px] md:w-[400px]"
        />
      </div>

      <button
        onClick={() =>
          irParaCheckout("Hero", "main,biologico,sociologico,pratico")
        }
        className="mb-10 border-dashed border-2 bg-red-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-xl shadow-orange-800 transition duration-300 relative mt-6"
      >
        <img
          src={calcinha}
          className="animate-bounce absolute size-16 lg:size-28 lg:-top-24 -top-14 right-0 transform scale-x-[-1] Z-50"
          alt=""
        />
        🔓 Quero aprender a ser sedutor
      </button>

      {/* Sessão 2: Reenforcement */}
    </section>
  );
}
