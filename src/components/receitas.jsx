import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ReceitasSection({ id }) {
  // Controle da animação
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [inView, controls]);

  // Lista de textos para simplificar a estrutura
  const textos = [
    "❌ Isso aqui não é um livro de cantadas! Estamos oferecendo conhecimento aprofundado sobre o comportamento humano.",
    "📚 Compreenda os códigos sociais, a linguagem não verbal e os sinais que realmente despertam atenção e conexão.",
    "💭 Desenvolva sua percepção e aprenda o que influencia o interesse genuíno nelas.",
    "🧬 Entenda o poder do corpo no reconhecimento do seu valor e sua presença.",
    "👉 Este é um passo a passo para desenvolver segurança, carisma e influência real.",
  ];

  return (
    <section
      id={id}
      ref={ref}
      className="pt-14 pb-24 px-4 bg-neutral-800 text-center text-white"
    >
      {/* Frase principal destacada */}
      <motion.h2
        className="text-[3vh] font-bold text-center text-brown-700"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        {textos[0]}
      </motion.h2>

      {/* Subitens estilizados */}
      <div className="mt-4 ml-8 pl-4 border-l-4 border-brown-700">
        {textos.slice(1).map((texto, index) => (
          <motion.h3
            key={index}
            className="text-[2.2vh] font-semibold text-left text-gray-300 mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.8, delay: (index + 1) * 0.3 }}
          >
            {texto}
          </motion.h3>
        ))}
      </div>
    </section>
  );
}
