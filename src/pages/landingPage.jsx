import React, { useEffect, useRef, useState } from "react";
import OfertasSection from "../components/ofertas";
import HeroSection from "../components/hero";
import BeneficiosSection from "../components/beneficios";
import ReceitasSection from "../components/receitas";
import ComboEbooks from "../components/livros";
import UrgenciaSection from "../components/urgencia";
import ContatoSection from "../components/contato";
import { registrarLog, enviarLogs } from "../utils/utils";

export default function LandingPage() {
  const [tempoRestante, setTempoRestante] = useState(1 * 37 * 60); // 37 minutos
  const inicio = useRef(Date.now());
  const ultimaSessao = useRef("Desconhecida");
  const indoProCheckout = useRef(false);

  const irParaCheckout = (origem, produtos) => {
    const tempoTotal = Math.floor((Date.now() - inicio.current) / 1000);

    indoProCheckout.current = true;
    sessionStorage.setItem("jaFoiProCheckout", "true");
    console.log("indoProCheckout ja foi editado para TRUE");
    registrarLog("landingPage", "Cliques", {
      mensagem: "Usuário clicou para ir ao checkout",
      origem,
      produtos,
      tempoTotal,
    });

    window.location.href = `/checkout?produtos=${encodeURIComponent(
      produtos
    )}&origem=${encodeURIComponent(origem)}`;
  };

  useEffect(() => {
    // Verifica se o usuário já foi para o checkout e retornou
    if (sessionStorage.getItem("jaFoiProCheckout") === "true") {
      // Reseta o estado ao retornar da página de checkout
      console.log("ta lendo aqui, ou seja, to voltando do checkout.");
      indoProCheckout.current = false;
    }

    const handleBeforeUnload = () => {
      console.log("aaaaaa ta de fato lendo isso ao ir para checkout");
      console.log("indoProCheckout:", indoProCheckout.current);

      const tempoTotal = Math.floor((Date.now() - inicio.current) / 1000);
      const jaFoiProCheckout =
        sessionStorage.getItem("jaFoiProCheckout") === "true";

      // Se estiver indo para o checkout, não registra log de saída
      if (indoProCheckout.current) return;

      console.log(
        "aparentemente nao ta indo pro checkout, entao vou enviar algum log"
      );
      if (jaFoiProCheckout) {
        console.log("ta falando que ja foi pro checkout");
        // Usuário foi para o checkout e voltou
        registrarLog("landingPage", "Saida", {
          mensagem: "Usuário foi ao checkout, mas voltou e saiu",
          ultimaSessao: ultimaSessao.current,
          tempoTotal,
        });
        enviarLogs("quiz", "landingPage", "checkout");
      } else {
        console.log("ta falando que NAO foi pro checkout");
        // Usuário saiu sem nunca ter ido ao checkout
        registrarLog("landingPage", "Saida", {
          mensagem: "Usuário saiu sem ir ao checkout",
          ultimaSessao: ultimaSessao.current,
          tempoTotal,
        });
        enviarLogs("quiz", "landingPage");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
    const dadosQuiz = JSON.parse(sessionStorage.getItem("landingPage")) || {};

    if (dadosQuiz.Entrada) {
      console.log("⚠️ Parâmetros já salvos anteriormente.");
      return;
    }
    // ✅ Registro de entrada na landing page
    registrarLog("landingPage", "Entrada", {
      mensagem: "Novo visitante na landing page 👀🎉",
    });
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
      <div className="fixed top-0 w-full z-50 bg-orange-100 border-b border-orange-300 shadow text-sm md:text-base text-orange-800 py-2 px-4 font-medium flex justify-center items-center gap-5">
        <span className="font-bold text-black w-1/4 text-center">
          🎈 Especial dia dos Namorados
        </span>
        <span className="font-bold text-center">Promoção válida por:</span>
        <span className="px-3 py-1 rounded-full bg-white text-black font-bold shadow-sm">
          ⏳ {formatarTempo(tempoRestante)}
        </span>
      </div>

      <HeroSection id="hero" irParaCheckout={irParaCheckout} />
      <BeneficiosSection id="beneficios" />
      <ReceitasSection id="receitas" />
      <ComboEbooks id="ebooks" />
      <UrgenciaSection id="urgencia" />
      <OfertasSection id="ofertas" irParaCheckout={irParaCheckout} />
      <ContatoSection id="contato" irParaCheckout={irParaCheckout} />
    </div>
  );
}
