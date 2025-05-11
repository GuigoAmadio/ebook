import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import caixaMarcada from "../assets/caixaMarcada.webp";

export default function BeneficiosSection({ id }) {
  // Configuração para que os textos apareçam mais cedo
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative text-white bg-gradient-to-b from-[#1B0002] via-[#300305] to-[#4B0A0F] font-medium text-center flex flex-col items-center justify-around py-20 overflow-hidden"
    >
      {/* Bolas com Visual Melhorado */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Camada de Bolas Maiores e Mais Visíveis */}
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#933D5E] to-[#7A1F3D] opacity-50 blur-[80px]"></div>
        <div className="absolute top-[50%] left-[60%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#7A1F3D] to-[#6F2C3F] opacity-40 blur-[70px]"></div>

        {/* Camada de Bolas Menores e Contrastantes */}
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#8B3A3A] to-[#933D5E] opacity-60 blur-[50px]"></div>
        <div className="absolute bottom-[20%] right-[30%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#933D5E] to-[#7A1F3D] opacity-50 blur-[60px]"></div>

        {/* Camada de Bolas Pequenas e Brilhantes */}
        <div className="absolute top-[70%] left-[10%] w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#933D5E] to-[#6F2C3F] opacity-70 blur-[30px]"></div>
        <div className="absolute top-[20%] right-[20%] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#8B3A3A] to-[#933D5E] opacity-60 blur-[40px]"></div>
      </div>

      {/* Cabeçalho com Animação */}
      <motion.h1
        className="font-bold text-[3vh] w-3/4 md:w-2/3"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5 }}
      >
        <span className="text-[3vh]">Esse manual lendário contém</span>
        <span className="bg-pink-500 p-1 text-white mx-2">
          os maiores segredos
        </span>
        do mundo <span className="text-pink-500">feminino</span>
      </motion.h1>

      {/* Subtítulo com Animação */}
      <motion.h1
        className="text-[3vh] font-bold w-3/4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <span className="bg-red-500 p-1 text-white mx-2">Não é preciso</span>
        ser bonito para atrair uma mulher. Se ainda acredita nisso, é porque
        nunca entendeu como elas realmente funcionam, basta ver o tanto de feio
        se dando bem por ai. Mulheres são{" "}
        <span className="bg-red-500 p-1 text-white mx-2">
          movidas por emoção
        </span>{" "}
        — e toda emoção tem gatilhos.
      </motion.h1>

      <motion.h1
        className="text-[3vh] font-bold w-3/4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        Quando você aprende a identificar e acionar esses gatilhos, o poder da
        atração <span className="text-red-500">deixa de ser um acaso...</span> e
        passa a ser uma <span className="text-red-600">ESCOLHA SUA.</span>
      </motion.h1>

      <motion.h2
        className="mt-10 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Afinal, quais são esses segredos?
      </motion.h2>

      {/* Lista com Animação e Barra Horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-start text-black flex flex-col justify-around rounded-2xl gap-4 bg-white px-5 py-6 mx-16"
      >
        {[
          "Como corrigir o corpo, a voz e o olhar a seu favor.",
          "O que ativa o desejo no cérebro feminino (segundo a neurociência).",
          "Compreender os estímulos que despertam interesse.",
          "Entenda como os ciclos hormonais afetam o comportamento feminino.",
          "Descubra como interpretar sinais sutis e responder com confiança.",
          "Conceitos de sociologia aplicados ao comportamento humano.",
          "Criar uma presença marcante com autenticidade.",
          "Conjunto de métodos eficazes para desenvolver sua comunicação social.",
        ].map((texto, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs">{texto}</p>
            </div>
            {index < 7 && (
              <hr className="w-full rounded-full border-neutral-300 opacity-70" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
