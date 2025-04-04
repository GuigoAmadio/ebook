import React from "react";
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
  return (
    <div className="font-sans text-brown-800 bg-white overflow-hidden">
      {/* Sessão 1: Hero Section */}
      <div className="">
        <section className="relative bg-lime-200 min-h-screen flex flex-col items-center text-center px-4 py-10">
          <h1 className="text-[3vh] md:text-[5vh] font-bold mb-4 text-brown-700">
            Transforme a Páscoa em Lucro <br></br>com Ovos Artesanais
          </h1>
          <p className="text-[2vh] w-3/4 md:w-1/2 font-semibold text-brown-600">
            Aprenda com nosso eBook exclusivo como ganhar dinheiro na Páscoa
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

        <section className="font-medium text-center px-4 flex flex-col items-center justify-start w-full gap-5 py-10 bg-white">
          <div className="relative">
            <h1 className="font-medium text-neutral-800 text-[3vh]">
              <span className="text-lime-500 font-bold">Precisa fazer</span> uma
              renda extra esse mes?
            </h1>
            <h2 className="flex flex-wrap justify-center items-center relative text-center font-light text-neutral-700 text-[3vh] mt-2 z-20">
              {" "}
              <div className="h-7 md:h-20 rounded-sm bg-pink-500 flex items-center justify-center mr-2 px-5">
                <p className="font-bold text-[2vh] text-white">Nao sabe</p>
              </div>
              por onde comecar?{" "}
              <span className="font-bold text-[3vh] text-lime-500 mx-2">
                QUAL
              </span>
              produto vender?
            </h2>
          </div>
          <div className="gap-4 flex flex-col items-center justify-around w-full">
            <div className="relative w-4/5 md:w-1/2 bg-lime-300 p-4 shadow-lg text-center flex items-center justify-center font-medium text-xs rounded-2xl">
              <div className="absolute rotate-45 -top-10 left-[80%]">
                <img src={question} alt="" className="size-12" />
              </div>
              <img src={retangulo} alt="" className="size-6 mr-5" /> Se sente
              desmotivado e desencorajado
            </div>
            <div className="relative w-4/5 md:w-1/2 bg-lime-300 p-4 shadow-lg text-center flex items-center justify-center font-medium text-xs rounded-2xl">
              <div className="absolute -rotate-45 -top-10 -left-[10%]">
                <img src={question} alt="" className="size-12" />
              </div>
              <img src={retangulo} alt="" className="size-6 mr-5" /> O cansaco
              esta tomando conta do seu tempo livre
            </div>
            <div className="relative w-4/5 md:w-1/2 bg-lime-300 p-4 shadow-lg text-center flex items-center justify-center font-medium text-xs rounded-2xl">
              <div className="absolute rotate-45 -top-10 left-[60%]">
                <img src={question} alt="" className="size-12" />
              </div>
              <img src={retangulo} alt="" className="size-6 mr-5" /> Voce deseja
              fazer uma renda a mais pra fechar o mes
            </div>
            <div className="relative w-4/5 md:w-1/2 bg-lime-300 p-4 shadow-lg text-center flex items-center justify-center font-medium text-xs rounded-2xl">
              <div className="absolute -rotate-45 -top-10 left-14">
                <img src={question} alt="" className="size-12" />
              </div>
              <img src={retangulo} alt="" className="size-6 mr-5" /> Aprender
              algo novo que gere renda
            </div>
          </div>
        </section>

        <section className="relative bg-orange-100 font-medium text-center flex flex-col items-center justify-around gap-10 py-5">
          <img
            src={coelho}
            className="size-20 md:size-48 absolute bottom-0 right-0 z-50"
            alt=""
          />
          <h1 className="font-bold text-[2vh] w-3/4 md:w-2/3">
            <span className="bg-pink-500 p-1 text-white mr-2">
              Vamos de maos dadas em TODAS as etapas!
            </span>
            para que voce seja capaz de{" "}
            <span className="text-lime-500 font-black">nao apenas</span>{" "}
            cozinhar, mas vende-los
          </h1>
          <div className="flex flex-col justify-around rounded-2xl gap-4 bg-white px-5 py-4 mx-10">
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">Tecnicas Basicas de Vendas</p>
            </div>
            <div class="relative h-[0.5px] w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
            </div>{" "}
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">Praticas para o dia a dia</p>
            </div>
            <div class="relative h-[0.8px] w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
            </div>{" "}
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">
                Conceitos basicos de negocios
              </p>
            </div>
            <div class="relative h-[0.8px] w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
            </div>{" "}
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">
                Nocao introdutoria a marketing
              </p>
            </div>
          </div>
          <h2 className="font-bold text-[2vh] w-3/4 md:w-2/3">
            Vamos ensinar{" "}
            <span className="font-black text-lime-500">licoes</span> sobre o
            <span className="bg-pink-500 ml-2 text-white p-1">
              mundo empreendedor
            </span>{" "}
            que serao uteis para qualquer situacao em sua vida.
          </h2>
          <div className="flex flex-col justify-around rounded-2xl gap-4 bg-white px-5 py-4 mx-10">
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">Tecnicas Basicas de Vendas</p>
            </div>
            <div class="relative h-[0.5px] w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
            </div>{" "}
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">Praticas para o dia a dia</p>
            </div>
            <div class="relative h-[0.8px] w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
            </div>{" "}
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">
                Conceitos basicos de negocios
              </p>
            </div>
            <div class="relative h-[0.8px] w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent animate-line-grow"></div>
            </div>{" "}
            <div className="flex items-center gap-2 ">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs text-nowrap">
                Nocao introdutoria a marketing
              </p>
            </div>
          </div>
        </section>
        {/* Sessão 2: Urgência */}
        <section className="bg-lime-200 text-black relative py-10 px-4 text-center flex flex-col items-center">
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
          <h2 className="text-[3vh] md:text-[5vh] font-bold mb-4">
            <span className="text-white bg-pink-500 px-4 py-1 rounded-sm">
              NAO PERCA
            </span>{" "}
            uma das épocas mais rentáveis do ano!
          </h2>
          <h3 className="text-[2vh] font-bold">
            Consiga fazer até R$ 3.755 de renda{" "}
            <span className="text-pink-500 font-extrabold ">EXTRA</span> por mês
            vendendo doces
          </h3>
          <img
            src={livroUm}
            alt="Capa do eBook"
            className="h-[300px] rounded-xl my-3"
          />
          <button
            onClick={() => (window.location.href = "/checkout")}
            className="hover:scale-105 shadow-lg shadow-lime-500 h-12 w-1/2 border-lime-300 mt-6 bg-white text-black rounded-lg text-[2vh] font-bold hover:bg-lime-300 hover:text-white transition"
          >
            Comprar agora
          </button>
        </section>
      </div>

      {/* Sessão 3: Benefícios */}
      <section className="pb-32 pt-16 px-4 bg-rose-950 text-center text-white">
        <h2 className="text-[4vh] font-bold text-center mb-24 text-brown-700">
          <span className="text-brown-900 text-[8vh]">25 </span>
          <span className="text-pink-500 text-[5vh]">
            Receitas Gourmet's
          </span>{" "}
          com segredos de preparo por profissionais:{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title:
                "Ovo de Colher Crocante de Amendoim e Chocolate Meio Amargo",
              image: amendoin,
              subtitles: [
                "Casca de chocolate meio amargo 70%",
                "Recheio cremoso de brigadeiro de paçoca",
                "Cobertura de ganache e crocante de amendoim caramelizado",
                "Finalização com fios de chocolate",
              ],
            },
            {
              title: "Ovo Gourmet Caramelo com chocolate branco",
              image: brancoEcaramelo,
              subtitles: [
                "Casca de chocolate branco premium",
                "Recheio de caramelo salgado cremoso (feito com manteiga e flor de sal)",
                "Finalização com caramelo escorrendo na casca",
              ],
            },
            {
              title: "Ovo Fit de Frutas Vermelhas com proteina",
              image: frutasVermelhas,
              subtitles: [
                "Casca de chocolate 54% com proteína isolada",
                "Recheio de creme de castanha com geleia artesanal de frutas vermelhas",
                "Topping de mix desidratado de frutas",
                "Finalização com casca crocante",
              ],
            },
            {
              title: "Ovo de Colher Toque de Limao",
              image: limao,
              subtitles: [
                "Casca de chocolate ao leite",
                "Creme feito com limao e leite condensado",
                "Cobertura de ganache + raspas de limao",
              ],
            },
            {
              title: "Ovo Cremoso Sonho de Valsa na Travessa",
              image: recheado,
              subtitles: [
                "Casca dupla: ao leite + branco",
                "Camadas alternadas de creme de castanha de caju, bombom picado",
                "Divisão por níveis",
              ],
            },
            {
              title: "Ovo Econômico de Brigadeiro Tradicional com Granulado",
              image: trufado,
              subtitles: [
                "Casca de chocolate fracionado (mais acessível)",
                "Recheio de brigadeiro tradicional",
                "Finalização com granulado e raspas",
              ],
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-rose-200 rounded-xl p-6 shadow text-left"
            >
              <div className="flex justify-around items-center">
                <div className="flex flex-col items-center gap-3 mb-3">
                  <h3 className="text-[3vh] font-bold text-pink-500">
                    {benefit.title}
                  </h3>
                  <ul className="list-disc list-inside text-[2vh] text-gray-700 space-y-1">
                    {benefit.subtitles.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <img
                  src={benefit.image}
                  alt=""
                  className="size-48 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full h-[0.5px] bg-gray-500"></div>
      {/* Sessão 4: Prova Social */}

      <section className="flex w-full py-20 flex-col items-center justify-start">
        <div className="w-full h-40 bg-pink-500 flex justify-center items-center">
          <h1 className="font-bold text-[5vh] mt-4 text-white">
            O que falam da gente?
          </h1>
        </div>
        <img src={ProvaSocial} alt="" className="size-auto" />
      </section>
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
