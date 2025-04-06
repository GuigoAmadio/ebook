import React from "react";
import { motion } from "framer-motion";

import pistacheImage from "../assets/pistache.png";
import livroUm from "../assets/livroUm.png";
import livro2 from "../assets/livro2.png";
import ovoUm from "../assets/ovoUm.png";
import ovoDois from "../assets/ovoDois.png";
import ovoTres from "../assets/ovoTres.png";
import ProvaSocial from "../assets/ProvaSocial.svg";
import trufas from "../assets/trufas2.png";
import trufas2 from "../assets/trufas.png";
import limao from "../assets/limao.png";
import recheado from "../assets/recheado.png";
import brancoEcaramelo from "../assets/brancoEcaramelo.png";
import frutasVermelhas from "../assets/frutasVermelhas.png";
import amendoin from "../assets/amendoin.png";
import trufado from "../assets/trufado.png";
import confete from "../assets/confete.png";
import parabens from "../assets/parabens.png";
import retangulo from "../assets/retangulo.png";
import caixaMarcada from "../assets/caixaMarcada.png";
import question from "../assets/question.png";
import coelho from "../assets/coelho.png";
import coelho2 from "../assets/coelho2.png";

export default function LandingPage() {
  const [tempoRestante, setTempoRestante] = React.useState(8 * 60 * 60);

  const benefits = [
    { name: "Amendoim Crocante", image: amendoin },
    { name: "Caramelo com Branco", image: brancoEcaramelo },
    { name: "Frutas Vermelhas Fit", image: frutasVermelhas },
    { name: "Toque de Limão", image: limao },
    { name: "Sonho de Valsa", image: recheado },
    { name: "Brigadeiro Tradicional", image: trufado },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTempoRestante((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatarTempo = (segundos) => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const s = String(segundos % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="font-sans text-brown-800 bg-white overflow-hidden">
      {/* Sessão 1: Hero Section */}
      <div className="fixed top-0 w-full z-50 bg-orange-100 border-b border-orange-300 shadow text-center text-sm md:text-base text-orange-800 py-2 px-4 font-medium flex justify-center items-center gap-4">
        <span className="font-bold text-lime-700">🐰 Especial de Páscoa:</span>
        <span className="font-bold">As promocoes acabam em:</span>
        <span className="ml-2 px-3 py-1 rounded-full bg-lime-100 text-lime-800 font-bold shadow-sm">
          ⏳ {formatarTempo(tempoRestante)}
        </span>
      </div>
      <div className="">
        <section className="relative bg-lime-200 min-h-screen flex flex-col items-center text-center px-4 py-10">
          <h1 className="mt-12 text-[3vh] md:text-[5vh] font-bold text-brown-700">
            Transforme a Páscoa em Lucro <br></br>com Ovos Artesanais
          </h1>
          <p className="text-[3vh] w-3/4 md:w-1/2 font-bold text-brown-600">
            Descubra agora como{" "}
            <span className="text-green-600 font-extrabold">
              ganhar dinheiro na Páscoa
            </span>{" "}
            fazendo e vendendo doces irresistíveis.
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
            onClick={() => (window.location.href = "/checkout")}
            className="relative bg-lime-300 text-black px-6 py-3 rounded-2xl w-3/4 border-2  border-dashed border-white md:w-1/3 text-[2vh] hover:bg-lime-400 hover:scale-105 transition shadow-lg drop-shadow-2xl shadow-yellow-400 font-bold my-5 md:my-20"
          >
            <img
              src={coelho2}
              className="animate-bounce absolute size-16 lg:size-28 lg:-top-24 -top-14 right-0 transform scale-x-[-1] Z-50"
              alt=""
            />
            QUERO APRENDER A TER UMA RENDA EXTRA NESTA PASCOA
          </button>
          {/* Sessão 2: Reenforcement */}
        </section>

        <section className="relative bg-orange-100 font-medium text-center flex flex-col items-center justify-around py-5">
          <img
            src={coelho}
            className="size-20 md:size-48 absolute bottom-0 left-0 scale-x-[-1] z-40"
            alt=""
          />
          <h1 className="font-bold text-[3vh] w-3/4 md:w-2/3">
            <span className="text-[3vh]">Eh mais facil do que pensa!</span>{" "}
            Iremos
            <span className="bg-pink-500 p-1 text-white mx-2">
              de <span>MAOS DADAS</span>
            </span>
            em TODAS as etapas!
            <span className="text-lime-500 font-black"> Nao apenas</span>{" "}
            cozinhar, mas{" "}
            <span className="text-lime-500 font-black">vende-los</span>
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
              <p className="text-xs text-nowrap">
                Tecnicas basicas de confeitaria
              </p>
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
              <p className="text-xs text-nowrap">
                Finalizacao de Ovos de Pascoa
              </p>
            </div>
            <div class="relative h-[0.8px] w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
            </div>{" "}
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">
                Metodos de conserva de doces
              </p>
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

        <section className="pt-14 pb-24 px-4 bg-rose-950 text-center text-white">
          <h2 className="text-[3vh] font-bold text-center mb-20 text-brown-700">
            Sao
            <span className="text-brown-900 text-[4vh]"> 15 </span>
            <span className="text-pink-500 text-[4vh]">Receitas</span> com
            segredos de preparo por profissionais:{" "}
          </h2>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 max-w-md mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col items-center text-center space-y-2"
              >
                <img
                  src={benefit.image}
                  alt={benefit.name}
                  className="w-20 h-20 object-contain"
                />
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-pink-500 font-bold text-sm"
                >
                  {benefit.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sessão 2: Urgência */}
        <section className="bg-orange-100 text-black relative py-10 px-4 text-center flex flex-col items-center">
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
              NAO PERCA
            </span>{" "}
            uma das épocas mais rentáveis do ano!
          </h2>
          <h2 className="text-[3vh] font-bold w-3/4">
            Aproveite nossa promocao e faca até R$ 3.755 de renda{" "}
            <span className="text-pink-500 font-extrabold ">EXTRA</span> por mês
            vendendo doces
          </h2>

          <img src={ProvaSocial} alt="" className="size-auto" />
        </section>
      </div>

      {/* Sessão 4: Prova Social */}
      <div className="w-full h-[0.5px] bg-gray-500"></div>
      {/* Sessão 5: Chamada final */}
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
          2 x de <span className="font-black text-green-400">R$10,90</span>
        </h1>
        <h2 className="mt-8 font-semibold">
          OU R$21,80 <span className="text-blue-400">a vista</span>
        </h2>
        <button
          onClick={() => (window.location.href = "/checkout")}
          className="animate-bounce shadow-xl shadow-pink-600 rounded-2xl w-80 h-14 text-[3vh] font-bold text-white hover:bg-pink-400 transition hover:scale-105 bg-pink-500 mt-12 mb-20"
        >
          Quero conhecer
        </button>
      </section>
      <section className="bg-lime-200 text-black py-16 px-4 text-center">
        <h2 className="text-[3vh] font-bold mb-4">
          Garanta agora seu eBook e comece a lucrar ainda hoje!
        </h2>
        <p className="text-[2vh] w-3/4 md:w-1/2 mx-auto mb-4">
          Não espere a próxima Páscoa. O melhor momento para começar é agora.
          Este pode ser o seu primeiro passo rumo à sua renda extra!
        </p>
        <button className="border-2 border-dashed border-lime-400 hover:scale-105 shadow-lg shadow-yellow-500 h-12 w-72 mt-6 bg-white text-black rounded-lg text-[2vh] font-bold hover:bg-lime-400 hover:text-white transition">
          Garantir Ja
        </button>
        <div className="flex w-full items-center justify-center lg:gap-40">
          <div>
            <h3 className="font-black text-[3vh] mt-10">
              Entre em contato conosco:
            </h3>
            <form className="max-w-xl mx-auto p-6 bg-lime-100 border-2 border-dashed border-lime-400 rounded-xl shadow-md space-y-6 mt-10">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="input"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  placeholder="Digite sua mensagem..."
                  className="input resize-none"
                ></textarea>
              </div>

              <button
                type=""
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
