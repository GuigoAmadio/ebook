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
    "❌ Esqueça fórmulas prontas. Este material oferece entendimento aprofundado sobre o comportamento humano.",
    "📚 Compreenda os códigos sociais, a linguagem não verbal e os sinais que realmente despertam atenção e conexão.",
    "💭 Desenvolva consciência emocional e aprenda o que influencia o interesse genuíno.",
    "🧬 Entenda o impacto de fatores biológicos e sociais na percepção de valor e presença.",
    "👉 Este não é um manual para impressionar. É um mapa mental para desenvolver segurança, carisma e influência real.",
  ];

  return (
    <section
      id={id}
      ref={ref}
      className="pt-14 pb-24 px-4 bg-neutral-800 text-center text-white"
    >
      {textos.map((texto, index) => (
        <motion.h2
          key={index}
          className="text-[2vh] font-bold text-center mt-4 text-brown-700"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8, delay: index * 0.5 }}
        >
          {texto}
        </motion.h2>
      ))}
    </section>
  );
}
