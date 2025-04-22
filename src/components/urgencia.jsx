import ProvaSocial from "../assets/ProvaSocial.svg";
import trufas from "../assets/trufas2.png";
import trufas2 from "../assets/trufas.png";

export default function UrgenciaSection({}) {
  return (
    <section className="bg-rose-950 text-white relative py-10 px-4 text-center flex flex-col items-center">
      <img
        src={trufas}
        alt="Trufas em linha"
        className="absolute left-1/2 lg:translate-x-[140%] translate-x-[120%] top-1/2 -translate-y-1/2 w-[200px] lg:w-[350px] z-10"
      ></img>
      <img
        src={trufas2}
        alt="Trufas em linha"
        className="absolute left-1/2 lg:-translate-x-[220%] -translate-x-[180%] top-2/3 lg:top-1/3 -translate-y-1/2 w-[240px] lg:w-[360px] z-10 rotate-90"
      ></img>
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
        Veja o que falam sobre o lendario manual da seducao:
      </h3>

      <img src={ProvaSocial} alt="" className="size-auto" />
    </section>
  );
}
