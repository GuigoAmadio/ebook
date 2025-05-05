import caixaMarcada from "../assets/caixaMarcada.png";

export default function BeneficiosSection({ id }) {
  return (
    <section
      id={id}
      className="text-white relative bg-neutral-950 font-medium text-center flex flex-col items-center justify-around py-20"
    >
      <h1 className="font-bold text-[3vh] w-3/4 md:w-2/3">
        <span className="text-[3vh]">Esse manual lendário contém</span>
        <span className="bg-pink-500 p-1 text-white mx-2">
          os maiores segredos
        </span>
        do mundo <span className="text-pink-500">feminino</span>
        <span className="text-lime-500"></span>
        <span className="text-lime-500"></span>
      </h1>
      <h1 className="text-[3vh] font-bold w-3/4 mt-8">
        <span className="bg-red-500 p-1 text-white mx-2">Não é preciso</span>
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
      <h2 className="mt-10 mb-4">Afinal, quais são esses segredos?</h2>
      <div className="text-start text-black flex flex-col justify-around rounded-2xl gap-4 bg-white px-5 py-4 mx-16">
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Como corrigir o corpo, a voz e o olhar a seu favor.
          </p>
        </div>
        <div className="relative h-[0.8px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            O que ativa o desejo no cérebro feminino (segundo a neurociência).
          </p>
        </div>
        <div className="relative h-[0.8px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Compreender os estímulos que despertam interesse.
          </p>
        </div>
        <div className="relative h-[0.8px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Entenda como os ciclos hormonais afetam o comportamento feminino.
          </p>
        </div>
        <div className="relative h-[0.8px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Descubra como interpretar sinais sutis e responder com confiança.
          </p>
        </div>
        <div className="relative h-[0.8px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Conceitos de sociologia aplicados ao comportamento humano.
          </p>
        </div>
        <div className="relative h-[0.8px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Criar uma presença marcante com autenticidade.
          </p>
        </div>
        <div className="relative h-[0.8px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
        </div>{" "}
        <div className="flex items-center gap-2 ">
          <img src={caixaMarcada} alt="" className="size-6" />
          <p className="text-xs">
            Conjunto de métodos eficazes para desenvolver sua comunicação
            social.
          </p>
        </div>
      </div>
    </section>
  );
}
