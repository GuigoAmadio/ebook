import caixaMarcada from "../assets/caixaMarcada.png";
import coelho from "../assets/coelho.png";

export default function BeneficiosSection() {
  return (
    <section className="relative bg-orange-100 font-medium text-center flex flex-col items-center justify-around py-5">
      <img
        src={coelho}
        className="size-20 md:size-48 absolute bottom-0 left-0 scale-x-[-1] z-40"
        alt=""
      />
      <h1 className="font-bold text-[3vh] w-3/4 md:w-2/3">
        <span className="text-[3vh]">Eh mais facil do que pensa!</span> Iremos
        <span className="bg-pink-500 p-1 text-white mx-2">
          de <span>MAOS DADAS</span>
        </span>
        em TODAS as etapas!
        <span className="text-lime-500 font-black"> Nao apenas</span> cozinhar,
        mas <span className="text-lime-500 font-black">vende-los</span>
      </h1>
      <h2 className="mt-10 mb-2 font-serif text-neutral-600">
        O que voce ira aprender ao longo do livro:
      </h2>
      <div className="flex flex-col justify-around rounded-2xl gap-4 bg-white px-5 py-4 mx-10">
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Tecnicas Basicas de Vendas</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Tecnicas basicas de confeitaria</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Como administrar um negocio</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Persuacao de clientes</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Recheios de Ovos de Pascoa</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Finalizacao de Ovos de Pascoa</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Metodos de conserva de doces</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">
            Calculo do custo e preco de venda
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">
            Pratica dos conceitos apresentados
          </p>
        </div>
      </div>
    </section>
  );
}
