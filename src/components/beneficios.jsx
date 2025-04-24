import caixaMarcada from "../assets/caixaMarcada.png";
import sutia from "../assets/sutia.png";

export default function BeneficiosSection() {
  return (
    <section className="text-white relative bg-neutral-950 font-medium text-center flex flex-col items-center justify-around py-20">
      <img
        src={sutia}
        className="size-16 md:size-48 absolute bottom-0 left-0"
        alt=""
      />
      <h1 className="font-bold text-[3vh] w-3/4 md:w-2/3">
        <span className="text-[3vh]">Esse manual lendario contem</span>
        <span className="bg-pink-500 p-1 text-white mx-2">
          os maiores segredos
        </span>
        do mundo <span className="text-pink-500">feminino</span>
        <span className="text-lime-500"></span>
        <span className="text-lime-500"></span>
      </h1>
      <h1 className="text-[3vh] font-bold w-3/4 mt-8">
        <span className="bg-red-500 p-1 text-white mx-2">Nao eh preciso</span>{" "}
        ser bonito para atrair uma mulher. Se ainda acredita nisso, é porque
        nunca entendeu como elas realmente funcionam. Mulheres são{" "}
        <span className="bg-red-500 p-1 text-white mx-2">
          movidas por emoção
        </span>{" "}
        — e toda emoção tem gatilhos.
      </h1>
      <h1 className="text-[3vh] font-bold w-3/4 mt-8">
        Quando você aprende a identificar e acionar esses gatilhos, o poder da
        atração <span className="text-red-500">deixa de ser um acaso...</span> e
        passa a ser uma <span className="text-pink-500">escolha sua.</span>
      </h1>
      <h2 className="mt-10 mb-2 font-serif">
        Afinal, quais sao esses segredos?
      </h2>
      <div className="text-start text-black flex flex-col justify-around rounded-2xl gap-4 bg-white px-5 py-4 mx-16">
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Como corrigir o corpo, a voz e o olhar a seu favor.
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            O que ativa o desejo no cérebro feminino (segundo a neurociência).
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">Técnicas reais de atração psicológica.</p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Hackeie o ciclo hormonal delas: <br /> controle-as usando o seu
            proprio corpo.
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Entenda como as mulheres testam os homens e saiba como passar neste
            teste.
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            O “efeito tribo”: se ajuste socialmente para impor confianca.
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Como criar tensão sexual só com gestos e postura.
          </p>
        </div>
        <div class="relative h-[0.8px] w-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Conjunto de metodos eficazes para desenvolver sua comunicacao
            social.
          </p>
        </div>
      </div>
    </section>
  );
}
