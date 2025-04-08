import ovoUm from "../assets/ovoUm.png";
import ovoDois from "../assets/ovoDois.png";
import ovoTres from "../assets/ovoTres.png";
import coelho2 from "../assets/coelho2.png";

export default function HeroSection({}) {
  return (
    <section className="relative bg-lime-200 min-h-screen flex flex-col items-center text-center px-4 py-10">
      <h1 className="mt-12 text-[3vh] md:text-[5vh] font-bold text-brown-700">
        Transforme Chocolate em Dinheiro Nesta Páscoa<br></br>
      </h1>
      <p className="text-[3vh] w-3/4 md:w-1/2 font-bold text-brown-600">
        Mesmo que você{" "}
        <span className="text-green-600 font-extrabold">
          nunca tenha vendido
        </span>{" "}
        nada antes ou ache que não leva jeito.
      </p>
      <div className="relative flex justify-center items-center h-auto my-20">
        {/* Glow / Vinheta */}
        <div className="absolute w-[400px] h-[400px] bg-pink-300 rounded-full blur-[100px] opacity-70 z-0"></div>

        {/* Ovos laterais (atrás) */}
        <img
          src={ovoDois}
          alt="Ovo esquerdo"
          className="absolute left-1/2 -translate-x-[100%] top-1/2 -translate-y-1/2 w-[160px] md:w-[360px] z-10 -rotate-12"
        />
        <img
          src={ovoTres}
          alt="Ovo direito"
          className="absolute left-1/2 translate-x-[10%] top-1/2 -translate-y-1/2 w-[160px] md:w-[350px] z-10 rotate-12"
        />

        {/* Ovo central (na frente) */}
        <img
          src={ovoUm}
          alt="Ovo central"
          className="relative z-20 w-[200px] md:w-[400px] -rotate-12"
        />
      </div>

      <button
        onClick={() => (window.location.href = "/checkout?produtos=pascoa")}
        className="relative bg-lime-300 text-black px-6 py-3 rounded-2xl w-3/4 border-2  border-dashed border-white md:w-1/3 text-[2vh] hover:bg-lime-400 hover:scale-105 transition shadow-lg drop-shadow-2xl shadow-yellow-400 font-bold my-5 md:my-20"
      >
        <img
          src={coelho2}
          className="animate-bounce absolute size-16 lg:size-28 lg:-top-24 -top-14 right-0 transform scale-x-[-1] Z-50"
          alt=""
        />
        🔓 QUERO TER UMA RENDA EXTRA NESTA PÁSCOA
      </button>
      {/* Sessão 2: Reenforcement */}
    </section>
  );
}
