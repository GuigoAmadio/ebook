import React, { useState, useEffect } from "react";

import ofertaAzul from "../assets/ofertaAzul.png";
import ebookBiologico from "../assets/ebookBiologico.png";
import ebookSocial from "../assets/ebookSocial.png";
import ebookTecnicas from "../assets/ebookTecnicas.png";
import ebookPrincipal from "../assets/ebookPrincipal.png";

export default function OfertasSection({ id, inicio, ultimaSessao }) {
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

  const generateBolas = () => {
    return Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 30}px`,
      opacity: Math.random() * 0.2 + 0.3,
    }));
  };

  const [bolas, setBolas] = useState([]);

  useEffect(() => {
    setBolas(generateBolas());
  }, []);
  return (
    <div id={id}>
      <section className="relative bg-zinc-800 text-white flex flex-col md:flex-row md:px-16 py-16 items-center gap-20">
        {/* Bolinhas Pequenas de Fundo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {bolas.map((bola, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-2xl bg-neutral-950"
              style={{
                width: bola.size,
                height: bola.size,
                top: bola.top,
                left: bola.left,
              }}
            ></div>
          ))}
        </div>
        <div className="z-10 bg-zinc-900 text-center py-5 w-3/4 rounded-xl shadow-md shadow-amber-500 border border-amber-500 flex flex-col items-center ">
          <h1 className="font-extrabold text-amber-500">
            Manual Secreto da Sedução <br />- Completo -
          </h1>
          <h2 className="line-through text-gray-400 text-[3vh]">R$73,90</h2>
          <h2 className="font-black text-[4vh] text-neutral-300 mt-2">
            R$21,90
          </h2>
          <p className="font-medium mt-3">O que voce irá receber:</p>
          <div className="text-start mt-2">
            <p className="mt-2 px-4">
              ✔️ Como elas pensam e o que realmente esperam
            </p>
            <p className="mt-2 px-4">✔️ O que te faz único aos olhos delas</p>
            <p className="mt-2 px-4">✔️ Como criar atração sem forçar nada</p>
            <p className="mt-2 px-4">
              📘 Leitura rápida, profunda e transformadora.
            </p>
          </div>
          <div className="relative h-[2px] w-full overflow-hidden mt-3">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
          </div>{" "}
          <div className="text-start flex flex-col items-center">
            <p className="line-through w-3/4">❌Guias complementares</p>
            <p className="line-through w-3/4">
              ❌Técnicas e táticas para praticar
            </p>
            <p className="line-through w-3/4">
              ❌Aprofundamento nas esferas biológicas e sociológicas
            </p>
          </div>
          <button
            onClick={() => irParaCheckout("OfertasPrimeiro", "main")}
            className="text-black mb-4 hover:scale-105 shadow-lg shadow-amber-800 h-12 w-1/2 border border-amber-800 mt-6 bg-amber-400 rounded-lg text-[2vh] font-bold hover:bg-amber-300 hover:text-white transition"
          >
            Comprar agora
          </button>
        </div>

        <div className="z-10 bg-zinc-900 relative text-center py-5 w-3/4 rounded-xl shadow-md shadow-orange-500 border border-orange-500 flex flex-col items-center ">
          <div className="absolute -top-7 -left-7">
            <img
              src={ebookPrincipal}
              alt=""
              className="w-14 h-auto -rotate-12"
            />
          </div>
          <div className="absolute -top-7 -right-7">
            <img src={ebookSocial} alt="" className="w-14 h-auto rotate-12" />
          </div>
          <h1 className="font-extrabold text-orange-500">
            Manual Completo
            <br />+ Um ebook bônus
          </h1>
          <h2 className="line-through text-gray-400 text-[3vh]">R$116,90</h2>
          <h2 className="font-black text-[4vh] text-neutral-300 mt-2">
            R$26,80
          </h2>
          <p className="font-medium mt-3">O que voce irá receber:</p>
          <div className="text-start mt-2">
            <p className="mt-2 px-4">
              ✔️ Manual Secreto da Sedução – como atrair com autenticidade
            </p>
            <p className="mt-2 px-4">
              ✔️ 1 eBook Bônus à sua escolha: <br />
              ▪️ Social | Biológico | Técnico
            </p>
            <p className="mt-2 px-4">
              📘 Conversas envolventes. Presença que impacta. Tudo começa com
              clareza, e não com frases decoradas.
            </p>
          </div>
          <div className="relative h-[2px] w-full overflow-hidden mt-3">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
          </div>{" "}
          <div className="text-start flex flex-col items-center">
            <p className="line-through w-3/4">❌2 ebooks não escolhidos</p>
            <p className="line-through w-3/4">
              ❌Aprofundamento completo das abordagens
            </p>
            <p className="line-through w-3/4">❌Kamasutra com 25 posições</p>
          </div>
          <button
            onClick={() => irParaCheckout("OfertasSegundo", "main,biologico")}
            className="mb-4 hover:scale-105 shadow-lg shadow-orange-800 h-12 w-1/2 border border-orange-800 mt-6 bg-orange-400 text-black rounded-lg text-[2vh] font-bold hover:bg-orange-300 hover:text-white transition"
          >
            Comprar agora
          </button>
        </div>
        <div className="z-10 bg-zinc-900 relative text-center py-5 px-2 w-3/4 rounded-xl shadow-xl shadow-rose-800 border border-rose-900 flex flex-col items-center ">
          <div
            className="absolute -top-7 left-1/4 
          flex items-center bg-white shadow-2xl rounded-full
          p-2 w-40 justify-center border border-gray-400 animate-pulse"
          >
            <img src={ofertaAzul} alt="" className="size-8" />
            <p className="font-bold text-cyan-500 text-xl">OFERTA</p>
          </div>
          <div className="absolute -top-7 -right-10 flex rotate-45">
            <img
              src={ebookBiologico}
              alt=""
              className="w-12 h-auto -rotate-12"
            />
            <img
              src={ebookPrincipal}
              alt=""
              className="w-12 h-auto rotate-12"
            />
          </div>
          <div className="absolute -top-7 -left-10 flex -rotate-45">
            <img src={ebookSocial} alt="" className="w-12 h-auto -rotate-12" />
            <img
              src={ebookTecnicas}
              alt=""
              className="w-12 h-auto rotate-12  "
            />
          </div>
          <h1 className="font-black text-rose-500 text-[3vh]">
            PROMOCAO DIA <br />
            DOS NAMORADOS
          </h1>
          <h1 className="font-black ">
            Manual Completo + 3 Guias Aprofundados + Kamasutra
          </h1>
          <p className="line-through text-gray-500 text-[3vh]">R$209,90</p>
          <p className="text-rose-900 text-[4vh] font-black">R$36,60</p>
          <p className="text-sm mt-4 font-medium">
            <span className="font-bold">✨ 82%</span> de desconto para você
            aproveitar:
          </p>
          <div className="text-start mt-2">
            <p className="mt-2 px-4 text-center text-rose-800 font-bold">
              Leve de <span>BÔNUS</span> um kamasutra com 25 posições.
            </p>
            <p className="mt-2 px-4">
              ❤️ O pacote completo para se tornar um homem magnético.
            </p>
            <p className="mt-2 px-4">
              ✔️ Manual Secreto da Sedução – domine mente, corpo e comunicação
            </p>
            <p className="mt-2 px-4">
              ✔️ 3 eBooks Avançados <br /> ▪️ Esfera Social — entenda o que elas
              esperam de um homem <br /> ▪️ Esfera Biológica — use seu corpo
              como aliado da atração <br /> ▪️ Esfera Técnica — como abordar,
              conversar e deixar marca
            </p>
            <p className="mt-2 px-4">
              ✔️ Kamasutra Contemporâneo – 25 posições explicadas com estilo e
              consciência
            </p>
          </div>
          <button
            onClick={() =>
              irParaCheckout(
                "OfertasTerceira",
                "main,biologico,sociologico,pratico"
              )
            }
            className="mb-4 hover:scale-105 shadow-lg shadow-pink-800 h-12 w-1/2 border border-pink-700 mt-6 bg-rose-900 text-black rounded-lg text-[2vh] font-bold hover:bg-pink-950 hover:text-white transition"
          >
            Comprar agora
          </button>
        </div>
      </section>
      <section className="bg-zinc-800 text-white py-10 px-4 text-center flex flex-col items-center">
        <h2 className="text-[4vh] font-bold text-brown-700">
          PRECOS PROMOCIONAIS
        </h2>
        <h2 className="text-[4vh] font-bold mb-6 text-rose-900">
          POR TEMPO LIMITADO!
        </h2>
        <p className="font-semibold texl-md w-80">
          Voce esta a uma decisao de mudar completamente a sua vida com as
          mulheres por apenas:
        </p>

        <h1 className="text-[6vh] font-extrabold text-neutral-400 mt-2">
          1 x de <span className="font-black text-rose-900">R$36,60</span>
        </h1>
        <button
          onClick={() =>
            irParaCheckout("OfertasFinal", "main,biologico,sociologico,pratico")
          }
          className="animate-bounce shadow-xl shadow-rose-800 rounded-2xl w-80 h-14 text-[3vh] font-bold text-white hover:bg-rose-800 transition hover:scale-105 bg-rose-900 mt-12 mb-20"
        >
          Quero conhecer
        </button>
      </section>
    </div>
  );
}
