import ProvaSocial2 from "../assets/ProvaSocial2.svg";

export default function UrgenciaSection() {
  return (
    <section className="bg-rose-950 text-white relative py-10 px-4 text-center flex flex-col items-center">
      <h2 className="text-[3vh] md:text-[5vh] font-bold w-3/4">
        <span className="text-white bg-pink-500 px-4 py-1 rounded-sm">
          Você está a poucos passos
        </span>{" "}
        de acessar um conhecimento que pode mudar sua percepção.
      </h2>
      <h2 className="text-[3vh] font-bold w-3/4">
        A maioria dos homens ainda vive sem entender as dinâmicas sociais…
        <span className="text-pink-500 font-extrabold">
          {" "}
          mas você não precisa ser um deles.
        </span>
      </h2>
      <h3 className="mt-5 font-black text-amber-600 text-[3vh] w-3/4">
        Veja o que estão dizendo sobre essa transformação masculina:
      </h3>

      <img src={ProvaSocial2} alt="Prova Social" className="size-auto" />
    </section>
  );
}
