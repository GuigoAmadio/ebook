import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ebookBiologico from "../assets/ebookBiologico.webp";
import ebookSocial from "../assets/ebookSocial.webp";
import ebookTecnicas from "../assets/ebookTecnicas.webp";

export default function ComboEbooks({ id }) {
  // Controle da animação
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    } else {
      controls.start({ opacity: 0, x: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <div
      id={id}
      className="bg-neutral-900 text-white min-h-screen px-4 py-16 sm:px-8 md:px-16"
      ref={ref}
    >
      {/* Títulos com Aparição Suave de Baixo para Cima */}
      <motion.h2
        className="text-xl md:text-3xl font-semibold mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        Melhor do que um… <span className="text-orange-600">Três.</span> Três
        abordagens para ampliar sua performance interpessoal.
      </motion.h2>
      <motion.h3
        className="font-medium mb-10 text-center mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        Você pode tentar entender as pessoas com base em achismo… Ou pode ter um
        guia prático com base em psicologia, biologia e comportamento real.
      </motion.h3>

      <div className="space-y-10">
        {/* Livro 1 */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={ebookBiologico}
            alt="Instinto Social"
            className="w-32 h-auto rounded shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-black mb-1 text-center">Instinto de Sedução</h3>
            <p className="text-center text-xs text-neutral-400 font-bold">
              Por que algumas conexões se aprofundam naturalmente e outras não
              passam da superficialidade? Sociologia, psicologia e neurociência
              reunidas para você entender comportamentos sutis que influenciam a
              percepção.
            </p>
          </motion.div>
        </motion.div>

        {/* Livro 2 */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={ebookSocial}
            alt="Leitura Social"
            className="w-32 h-auto rounded shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-black mb-1 text-center">O Jogo Invisível</h3>
            <p className="text-xs text-center text-neutral-400 font-bold">
              Como interpretar sinais não verbais e entender os verdadeiros
              interesses no ambiente? Veja o que está por trás das palavras e
              como decifrar intenções de forma precisa.
            </p>
          </motion.div>
        </motion.div>

        {/* Livro 3 */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={ebookTecnicas}
            alt="Expressão de Alto Impacto"
            className="w-32 h-auto rounded shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-black mb-1 text-center">Arsenal da Atração</h3>
            <p className="text-xs text-center text-neutral-400 font-bold">
              Desenvolva linguagem corporal, estilo pessoal e formas de
              comunicação que geram percepção de valor. Não se trata de atuar.
              Trata-se de ser percebido de forma clara, segura e autêntica.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.h3
        className="text-center mt-10 font-bold text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 2, delay: 0.8 }}
      >
        Conhecimento é liberdade. E liberdade é escolha. Compreenda mais, decida
        melhor.
      </motion.h3>
    </div>
  );
}
