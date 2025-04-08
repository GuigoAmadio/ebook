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
        <span className="text-[3vh]">É mais fácil do que parece!</span> A gente
        <span className="bg-pink-500 p-1 text-white mx-2">
          te pega pela mão
        </span>
        e te mostra tudo — da <span className="text-lime-500">cozinha</span> até
        a <span className="text-lime-500">venda.</span>
      </h1>
      <h2 className="mt-10 mb-2 font-serif text-neutral-600">
        Você vai aprender MUITO mais que receitas:
      </h2>
      <div className="flex flex-col justify-around rounded-2xl gap-4 bg-white px-5 py-4 mx-16">
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Tecnicas Basicas de Vendas</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-nowrap">Truques de confeitaria simples</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-start">
            Como montar e precificar seu negócio caseiro
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-start">
            Como conservar, embalar e apresentar
          </p>
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
          <p className="text-xs text-start">
            Como transformar seguidores, amigos e vizinhos em clientes fiéis
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs text-start">
            Pratica dos conceitos apresentados
          </p>
        </div>
      </div>
    </section>
  );
}
