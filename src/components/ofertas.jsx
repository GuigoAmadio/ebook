export default function OfertasSection() {
  return (
    <div>
      <section className="flex flex-col py-16 items-center gap-10">
        <div className="text-center py-5 w-3/4 rounded-xl shadow-md shadow-pink-300 border border-pink-500 flex flex-col items-center ">
          <h1 className="font-extrabold text-pink-500">
            Guia Lucrando na Pascoa <br />- Completo -
          </h1>
          <h2 className="line-through text-gray-600 text-[3vh]">R$73,90</h2>
          <h2 className="font-black text-[4vh] text-neutral-700 mt-2">
            R$16,90
          </h2>
          <p className="font-medium mt-3">O que voce ira receber:</p>
          <div className="text-start mt-2">
            <p className="mt-2">✔️ Tecnicas Basicas de Vendas</p>
            <p className="mt-2">✔️ Introucao a confeitaria</p>
            <p className="mt-2">✔️ Calculos de custo de producao</p>
          </div>
          <div class="relative h-[2px] w-full overflow-hidden mt-3">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
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
            className="mb-4 hover:scale-105 shadow-lg shadow-pink-500 h-12 w-1/2 border-pink-300 mt-6 bg-pink-400 text-black rounded-lg text-[2vh] font-bold hover:bg-pink-300 hover:text-white transition"
          >
            Comprar agora
          </button>
        </div>
        <div className="text-center py-5 px-2 w-3/4 rounded-xl shadow-md shadow-lime-300 border border-lime-500 flex flex-col items-center ">
          <h1 className="font-black text-lime-500 text-[3vh]">
            PROMOCAO DE <br />
            PASCOA
          </h1>
          <h1 className="font-black ">
            Guia Completo + Ebook fitness + Ebook Gourmet
          </h1>
          <p className="line-through text-gray-600 text-[3vh]">R$121,90</p>
          <p className="text-green-400 text-[4vh] font-black">R$21,90</p>
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
            className="mb-4 hover:scale-105 shadow-lg shadow-lime-500 h-12 w-1/2 border-lime-300 mt-6 bg-lime-400 text-black rounded-lg text-[2vh] font-bold hover:bg-lime-300 hover:text-white transition"
          >
            Comprar agora
          </button>
        </div>
      </section>
      <section className="bg-white text-black py-5 px-4 text-center flex flex-col items-center">
        <h2 className="text-[4vh] font-bold text-brown-700">
          PRECOS PROMOCIONAIS
        </h2>
        <h2 className="text-[4vh] font-bold mb-6 text-pink-500">
          POR TEMPO LIMITADO!
        </h2>
        <p className="font-semibold texl-md w-80">
          Voce esta a uma decisao de fazer parte de uma grande comunidade de
          vencedores por apenas:
        </p>

        <h1 className="text-[6vh] font-extrabold text-neutral-700 mt-2">
          2 x de <span className="font-black text-green-400">R$10,95</span>
        </h1>
        <h2 className="mt-2 font-semibold">
          OU R$21,90 <span className="text-blue-400">a vista</span>
        </h2>
        <button
          onClick={() =>
            (window.location.href =
              "/checkout?produtos=pascoa,fit,gourmet,admin")
          }
          className="animate-bounce shadow-xl shadow-pink-600 rounded-2xl w-80 h-14 text-[3vh] font-bold text-white hover:bg-pink-400 transition hover:scale-105 bg-pink-500 mt-12 mb-20"
        >
          Quero conhecer
        </button>
      </section>
    </div>
  );
}
