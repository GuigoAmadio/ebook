import limao from "../assets/limao.png";
import recheado from "../assets/recheado.png";
import brancoEcaramelo from "../assets/brancoEcaramelo.png";
import frutasVermelhas from "../assets/frutasVermelhas.png";
import amendoin from "../assets/amendoin.png";
import trufado from "../assets/trufado.png";
import { motion } from "framer-motion";

export default function ReceitasSection({}) {
  const benefits = [
    { name: "Amendoim Crocante", image: amendoin },
    { name: "Caramelo com Branco", image: brancoEcaramelo },
    { name: "Frutas Vermelhas Fit", image: frutasVermelhas },
    { name: "Toque de Limão", image: limao },
    { name: "Sonho de Valsa", image: recheado },
    { name: "Brigadeiro Tradicional", image: trufado },
  ];

  return (
    <section className="pt-14 pb-24 px-4 bg-rose-950 text-center text-white">
      <h2 className="text-[3vh] font-bold text-center mb-20 text-brown-700">
        🍬 São
        <span className="text-brown-900 text-[4vh]"> 15 </span>
        <span className="text-pink-500 text-[4vh]">
          Receitas PROFISSIONAIS{" "}
        </span>
        testadas que fazem seus doces venderem sozinhos:
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
  );
}
