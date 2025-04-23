import ofertaAzul from "../assets/ofertaAzul.png";
export default function OfertasSection() {
  return (
    <div>
      <section className="flex flex-col md:flex-row md:px-16 py-16 items-center gap-20">
        <div className="text-center py-5 w-3/4 rounded-xl shadow-md shadow-rose-300 border border-rose-500 flex flex-col items-center ">
          <h1 className="font-extrabold text-pink-500">
            Manual Secreto da Seducao <br />- Completo -
          </h1>
          <h2 className="line-through text-gray-600 text-[3vh]">R$73,90</h2>
          <h2 className="font-black text-[4vh] text-neutral-700 mt-2">
            R$14,90
          </h2>
          <p className="font-medium mt-3">O que voce ira receber:</p>
          <div className="text-start mt-2">
            <p className="mt-2">✔️ Tecnicas Basicas de Vendas</p>
            <p className="mt-2">✔️ Introucao a confeitaria</p>
            <p className="mt-2">✔️ Calculos de custo de producao</p>
          </div>
          <div className="relative h-[2px] w-full overflow-hidden mt-3">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
          </div>{" "}
          <div className="text-start flex flex-col items-center">
            <p className="line-through w-3/4">❌Conceitos administrativos</p>
            <p className="line-through w-3/4">
              ❌Receitas Gourmets dos ovos MAIS VENDIDOS
            </p>
            <p className="line-through w-3/4">
              ❌Receitas Fitness saudaveis para esportistas
            </p>
          </div>
          <button
            onClick={() => (window.location.href = "/checkout?produto=ebook")}
            className="mb-4 hover:scale-105 shadow-lg shadow-rose-400 h-12 w-1/2 border-rose-400 mt-6 bg-pink-400 text-black rounded-lg text-[2vh] font-bold hover:bg-pink-300 hover:text-white transition"
          >
            Comprar agora
          </button>
        </div>
        <div className="relative text-center py-5 px-2 w-3/4 rounded-xl shadow-md shadow-green-300 border border-green-500 flex flex-col items-center ">
          <div
            className="absolute -top-2 -left-16 
          -rotate-45 flex items-center bg-white shadow-2xl rounded-full
          p-2 w-40 justify-center border border-gray-400 animate-pulse"
          >
            <img src={ofertaAzul} alt="" className="size-8" />
            <p className="font-bold text-cyan-500 text-xl">OFERTA</p>
          </div>
          <h1 className="font-black text-green-500 text-[3vh]">
            PROMOCAO DIA <br />
            DOS NAMORADOS
          </h1>
          <h1 className="font-black ">Manual Completo + Kamasutra</h1>
          <p className="line-through text-gray-600 text-[3vh]">R$92,90</p>
          <p className="text-green-400 text-[4vh] font-black">R$16,90</p>
          <p className="text-sm mt-4 font-medium">
            Com <span className="font-bold">82%</span> de desconto, voce ira
            aproveitar:
          </p>
          <div className="text-start mt-2">
            <p className="mt-2">✔️ Tecnicas Basicas de Vendas</p>
            <p className="mt-2">✔️ Introucao a confeitaria</p>
            <p className="mt-2">✔️ Calculos de custo de producao</p>
            <p className="mt-2">✔️ Calculos de custo de producao</p>
            <p className="mt-2">✔️ Calculos de custo de producao</p>
            <p className="mt-2">✔️ Calculos de custo de producao</p>
          </div>
          <button
            onClick={() =>
              (window.location.href =
                "/checkout?produtos=pascoa,fit,gourmet,admin")
            }
            className="mb-4 hover:scale-105 shadow-lg shadow-green-500 h-12 w-1/2 border-green-300 mt-6 bg-green-400 text-black rounded-lg text-[2vh] font-bold hover:bg-lime-300 hover:text-white transition"
          >
            Comprar agora
          </button>
        </div>
      </section>
      <section className="bg-white text-black py-5 px-4 text-center flex flex-col items-center">
        <h2 className="text-[4vh] font-bold text-brown-700">
          PRECOS PROMOCIONAIS
        </h2>
        <h2 className="text-[4vh] font-bold mb-6 text-red-500">
          POR TEMPO LIMITADO!
        </h2>
        <p className="font-semibold texl-md w-80">
          Voce esta a uma decisao de mudar completamente a sua vida com as
          mulheres por apenas:
        </p>

        <h1 className="text-[6vh] font-extrabold text-neutral-700 mt-2">
          2 x de <span className="font-black text-green-400">R$8,95</span>
        </h1>
        <h2 className="mt-2 font-semibold">
          OU R$16,90 <span className="text-red-400">a vista</span>
        </h2>
        <button
          onClick={() =>
            (window.location.href =
              "/checkout?produtos=pascoa,fit,gourmet,admin")
          }
          className="animate-bounce shadow-xl shadow-green-600 rounded-2xl w-80 h-14 text-[3vh] font-bold text-white hover:bg-green-400 transition hover:scale-105 bg-green-500 mt-12 mb-20"
        >
          Quero conhecer
        </button>
      </section>
    </div>
  );
}
