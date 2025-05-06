import React, { useEffect, useRef, useState } from "react";
import OfertasSection from "../components/ofertas";
import HeroSection from "../components/hero";
import BeneficiosSection from "../components/beneficios";
import ReceitasSection from "../components/receitas";
import ComboEbooks from "../components/livros";
import UrgenciaSection from "../components/urgencia";
import ContatoSection from "../components/contato";

export default function LandingPage() {
  const [tempoRestante, setTempoRestante] = useState(1 * 37 * 60); // 37 minutos
  const inicio = useRef(Date.now());
  const ultimaSessao = useRef("Desconhecida");

  useEffect(() => {
    const secoes = [
      { id: "hero", nome: "Hero" },
      { id: "beneficios", nome: "Benefícios" },
      { id: "receitas", nome: "Receitas" },
      { id: "ebooks", nome: "Ebooks" },
      { id: "urgencia", nome: "Urgência" },
      { id: "ofertas", nome: "Ofertas" },
      { id: "contato", nome: "Contato" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const s = secoes.find((secao) => secao.id === entry.target.id);
            if (s) ultimaSessao.current = s.nome;
          }
        });
      },
      { threshold: 0.3 }
    );

    secoes.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // ✅ Envio imediato quando o usuário entra
    const payloadEntrada = {
      mensagem: "Novo visitante na landing page 👀🎉",
      timestamp: new Date().toISOString(),
    };

    try {
      navigator.sendBeacon(
        "https://us-central1-stripepay-3c918.cloudfunctions.net/api/temGenteAquikk",
        new Blob([JSON.stringify(payloadEntrada)], { type: "text/plain" })
      );
    } catch (e) {
      console.warn("Erro ao enviar beacon de entrada:", e);
    }

    const handlePageHide = () => {
      const tempoTotal = Math.floor((Date.now() - inicio.current) / 1000);
      const payload = {
        mensagem: "Saiu da landing sem ir ao checkout 🫡",
        ultimaSessao: ultimaSessao.current,
        tempoTotal,
        timestamp: new Date().toISOString(),
      };

      try {
        navigator.sendBeacon(
          "https://us-central1-stripepay-3c918.cloudfunctions.net/api/temGenteAquikk",
          new Blob([JSON.stringify(payload)], { type: "text/plain" })
        );
      } catch (e) {
        console.warn("Erro ao enviar beacon:", e);
      }
    };

    window.addEventListener("pagehide", handlePageHide);
    return () => window.removeEventListener("pagehide", handlePageHide);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatarTempo = (segundos) => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const s = String(segundos % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="font-sans text-brown-800 bg-white overflow-hidden">
      <div className="fixed top-0 w-full z-50 bg-orange-100 border-b border-orange-300 shadow text-sm md:text-base text-orange-800 py-2 px-4 font-medium flex items-center gap-5">
        <span className="font-bold text-black w-1/4 text-center">
          🎈 Especial de Namorados
        </span>
        <span className="font-bold">Promoção válida por:</span>
        <span className="px-3 py-1 rounded-full bg-white text-black font-bold shadow-sm">
          ⏳ {formatarTempo(tempoRestante)}
        </span>
      </div>

      <HeroSection id="hero" inicio={inicio} ultimaSessao={ultimaSessao} />
      <BeneficiosSection id="beneficios" />
      <ReceitasSection id="receitas" />
      <ComboEbooks id="ebooks" />
      <UrgenciaSection id="urgencia" />
      <OfertasSection
        id="ofertas"
        inicio={inicio}
        ultimaSessao={ultimaSessao}
      />
      <ContatoSection
        id="contato"
        inicio={inicio}
        ultimaSessao={ultimaSessao}
      />
    </div>
  );
}
