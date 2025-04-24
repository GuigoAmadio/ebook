import React from "react";

import HeroSection from "../components/hero";
import BeneficiosSection from "../components/beneficios";
import ReceitasSection from "../components/receitas";
import UrgenciaSection from "../components/urgencia";
import OfertasSection from "../components/ofertas";
import ContatoSection from "../components/contato";
import ComboEbooks from "../components/livros";

export default function LandingPage() {
  const [tempoRestante, setTempoRestante] = React.useState(1 * 37 * 60);

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
      <div className="fixed top-0 w-full z-50 bg-orange-100 border-b border-orange-300 shadow text-center text-sm md:text-base text-orange-800 py-2 px-4 font-medium flex justify-center items-center gap-2">
        <span className="font-bold text-black">🎈 Especial de Namorados |</span>
        <span className="font-bold">Promoção válida por</span>
        <span className="px-3 py-1 rounded-full bg-white text-black font-bold shadow-sm">
          ⏳ {formatarTempo(tempoRestante)}
        </span>
      </div>
      <HeroSection></HeroSection>
      <BeneficiosSection></BeneficiosSection>
      <ReceitasSection></ReceitasSection>
      <UrgenciaSection></UrgenciaSection>
      <ComboEbooks></ComboEbooks>
      <OfertasSection></OfertasSection>
      <ContatoSection></ContatoSection>
    </div>
  );
}
