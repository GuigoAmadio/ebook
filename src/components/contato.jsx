export default function ContatoSection() {
  return (
    <section className="bg-neutral-800 text-white py-16 px-4 text-center">
      <h2 className="text-[3vh] font-bold mb-4">
        Garanta agora seu eBook e entenda as mulheres ainda hoje!
      </h2>
      <p className="text-[2vh] w-3/4 md:w-1/2 mx-auto mb-4">
        Não deixe para depois. Aprenda a desenvolver sua percepção, entender
        melhor os sinais sociais e aprimorar sua comunicação com clareza e
        impacto.
      </p>
      <button
        onClick={() => (window.location.href = "/checkout?produtos=pascoa")}
        className="border-2 border-dashed border-red-400 hover:scale-105 shadow-lg shadow-yellow-500 h-12 w-72 mt-6 bg-white text-black rounded-lg text-[2vh] font-bold hover:bg-lime-400 hover:text-white transition"
      >
        🔥 QUERO APRENDER AGORA MESMO
      </button>
      <div className="flex w-full items-center justify-center lg:gap-40">
        <div>
          <h3 className="font-black text-[3vh] mt-10">
            Entre em contato conosco:
          </h3>
          <form className="max-w-xl mx-auto p-6 bg-rose-200 border-2 border-dashed border-red-400 rounded-xl shadow-md space-y-6 mt-10">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="input"
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                placeholder="Digite sua mensagem..."
                className="input resize-none"
              ></textarea>
            </div>

            <button
              type=""
              className="w-full bg-rose-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
