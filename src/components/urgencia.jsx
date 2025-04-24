import ProvaSocial from "../assets/ProvaSocial.svg";

export default function UrgenciaSection() {
  return (
    <section className="bg-rose-950 text-white relative py-10 px-4 text-center flex flex-col items-center">
      <h2 className="text-[3vh] md:text-[5vh] font-bold w-3/4">
        <span className="text-white bg-pink-500 px-4 py-1 rounded-sm">
          Você não faz ideia
        </span>{" "}
        do poder que está prestes a desbloquear.
      </h2>
      <h2 className="text-[3vh] font-bold w-3/4">
        A maioria dos homens vive no escuro…
        <span className="text-pink-500 font-extrabold "> mas não você!</span>
      </h2>
      <h3 className="mt-5 font-black text-amber-600 text-[3vh] w-3/4">
        Veja o que falam sobre o lendário manual da sedução:
      </h3>

      <img src={ProvaSocial} alt="" className="size-auto" />
    </section>
  );
}
