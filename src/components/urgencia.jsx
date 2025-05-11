import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProvaSocial2 from "../assets/ProvaSocial2.svg";

export default function UrgenciaSection({ id }) {
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

  return (
    <section
      id={id}
      ref={ref}
      className="bg-rose-950 text-white relative py-10 px-4 text-center flex flex-col items-center"
    >
      {/* Cabeçalho com Animação */}
      <motion.h2
        className="text-[3vh] md:text-[5vh] font-bold w-3/4"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <span className="text-white bg-pink-500 px-4 py-1 rounded-sm">
          Você está a poucos passos
        </span>{" "}
        de acessar um conhecimento que pode mudar sua percepção.
      </motion.h2>

      <motion.h2
        className="text-[3vh] font-bold w-3/4 mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        A maioria dos homens ainda vive sem entender as dinâmicas sociais…
        <span className="text-pink-500 font-extrabold">
          {" "}
          mas você não precisa ser um deles.
        </span>
      </motion.h2>

      <motion.h3
        className="mt-5 font-black text-amber-600 text-[3vh] w-3/4"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        Veja o que estão dizendo sobre essa transformação masculina:
      </motion.h3>

      <motion.img
        src={ProvaSocial2}
        alt="Prova Social"
        className="size-auto mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </section>
  );
}
