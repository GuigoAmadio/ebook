import React from "react";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold shadow-lg bg-gray-700 p-4 rounded-xl">
          Explorando a Sociedade Moderna
        </h1>
        <p className="text-lg mt-2">
          Um mergulho profundo nas dinâmicas sociais contemporâneas
        </p>
      </header>

      <main className="space-y-16">
        <section className="p-8 bg-gray-800 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-semibold">Sobre o Livro</h2>
          <p className="mt-4">
            "Explorando a Sociedade Moderna" é uma obra que desvenda os
            mecanismos sociais que moldam nossa convivência atual. Perfeito para
            estudantes, curiosos e profissionais que desejam entender mais sobre
            o comportamento humano na era moderna.
          </p>
        </section>

        <section className="p-8 bg-gray-800 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-semibold">Benefícios</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Análise crítica dos fenômenos sociais.</li>
            <li>Estudos de caso contemporâneos.</li>
            <li>Reflexões sobre identidade, cultura e poder.</li>
          </ul>
        </section>

        <section className="p-8 bg-gray-800 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-semibold">Depoimentos</h2>
          <blockquote className="mt-4 italic">
            "Este livro abriu meus olhos para as complexidades sociais que eu
            nunca havia considerado." - Marina S.
          </blockquote>
        </section>

        <section className="p-8 bg-gray-800 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-semibold">Oferta Exclusiva</h2>
          <p className="mt-4">
            Aproveite o preço promocional por tempo limitado e mergulhe nos
            conceitos sociológicos com profundidade.
          </p>
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition">
            Comprar Agora
          </button>
        </section>
      </main>

      <footer className="text-center py-4">
        <p className="text-sm">
          © 2025 Sociologia Moderna. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default MainPage;
