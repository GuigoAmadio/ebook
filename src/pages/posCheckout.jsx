// src/pages/PosCheckout.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResumoCompra from "../components/ResumoCompra";
import ProductCard from "../components/ProductCard";

export default function PosCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const produtosComprados = query.get("produtos")?.split(",") || ["pascoa"];

  const todosProdutos = [
    {
      id: "pascoa",
      nome: "Lucrando com a Páscoa",
      precoOriginal: 71.9,
      precoAtual: 16.9,
    },
    {
      id: "admin",
      nome: "Técnicas de Administração",
      precoOriginal: 52.2,
      precoAtual: 8.9,
    },
    {
      id: "fit",
      nome: "Ebook de Ovos Fitness",
      precoOriginal: 25.9,
      precoAtual: 4.9,
    },
    {
      id: "gourmet",
      nome: "Ebook de Ovos Gourmet",
      precoOriginal: 25.9,
      precoAtual: 4.9,
    },
  ];

  const produtosRestantes = todosProdutos.filter(
    (produto) => !produtosComprados.includes(produto.id)
  );

  const [produtosSelecionados, setProdutosSelecionados] = React.useState([]);

  const alternarProduto = (id) => {
    setProdutosSelecionados((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
    );
  };

  const selecionados = todosProdutos.filter((p) =>
    produtosSelecionados.includes(p.id)
  );

  const totalOriginal = selecionados.reduce(
    (acc, p) => acc + p.precoOriginal,
    0
  );
  const totalAtual = selecionados.reduce((acc, p) => acc + p.precoAtual, 0);
  const descontoTotal = totalOriginal - totalAtual;

  return (
    <div className="min-h-screen bg-lime-50 py-16 px-4 md:px-20 flex flex-col items-center">
      <h1 className="text-4xl mb-6 text-green-700 font-extrabold">
        ✅ Compra Confirmada!
      </h1>
      <p className="text-center max-w-lg text-lg mb-10">
        Seu pedido foi processado com sucesso. Em breve você receberá os ebooks
        em seu e-mail. Enquanto isso, aproveite uma oferta exclusiva para
        complementar seu aprendizado:
      </p>

      {produtosRestantes.length > 0 && (
        <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="font-bold text-xl mb-4">
            Como forma de agradecimento, você ganhou um desconto especial nos
            produtos abaixo:
          </h2>
          <div className="flex flex-col gap-4">
            {produtosRestantes.map((produto) => (
              <ProductCard
                key={produto.id}
                nome={produto.nome}
                precoOriginal={produto.precoOriginal}
                precoAtual={produto.precoAtual}
                selecionado={produtosSelecionados.includes(produto.id)}
                onChange={() => alternarProduto(produto.id)}
              />
            ))}
          </div>
          {produtosSelecionados.length > 0 && (
            <div className="mt-6">
              <ResumoCompra
                selecionados={selecionados}
                totalOriginal={totalOriginal}
                totalAtual={totalAtual}
                descontoTotal={descontoTotal}
              />
              <button
                onClick={() => {
                  navigate(
                    `/checkout?produtos=${[
                      ...produtosComprados,
                      ...produtosSelecionados,
                    ].join(",")}`
                  );
                }}
                className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-pink-600 transition"
              >
                Adicionar e Finalizar
              </button>
            </div>
          )}
        </div>
      )}

      {produtosRestantes.length === 0 && (
        <p className="text-gray-500 font-medium">
          Você já adquiriu todos os nossos ebooks! Obrigado 🙌
        </p>
      )}
    </div>
  );
}
