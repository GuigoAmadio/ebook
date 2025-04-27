import ebookBiologico from "../assets/ebookBiologico.png";
import ebookSocial from "../assets/ebookSocial.png";
import ebookTecnicas from "../assets/ebookTecnicas.png";

export default function ComboEbooks() {
  return (
    <div className="bg-neutral-900 text-white min-h-screen px-4 py-16 sm:px-8 md:px-16">
      <h2 className="text-xl md:text-3xl font-semibold mb-2 text-center">
        Melhor do que um… <span className="text-orange-600">Três.</span> Três
        abordagens para ampliar sua performance interpessoal.
      </h2>
      <h3 className="font-medium mb-10 text-center mt-8">
        Você pode tentar entender as pessoas com base em achismo… Ou pode ter um
        guia prático com base em psicologia, biologia e comportamento real.
      </h3>

      <div className="space-y-10">
        {/* Livro 1 */}
        <div className="flex items-center justify-center gap-6">
          <img
            src={ebookBiologico}
            alt="Instinto Social"
            className="w-32 h-auto rounded shadow"
          />
          <div>
            <h3 className="font-black mb-1 text-center">Instinto de Sedução</h3>
            <p className="text-center text-xs text-neutral-400 font-bold">
              Por que algumas conexões se aprofundam naturalmente e outras não
              passam da superficialidade? Sociologia, psicologia e neurociência
              reunidas para você entender comportamentos sutis que influenciam a
              percepção.
            </p>
          </div>
        </div>

        {/* Livro 2 */}
        <div className="flex items-center gap-6">
          <img
            src={ebookSocial}
            alt="Leitura Social"
            className="w-32 h-auto rounded shadow"
          />
          <div>
            <h3 className="font-black mb-1 text-center">O Jogo Invisível</h3>
            <p className="text-xs text-center text-neutral-400 font-bold">
              Como interpretar sinais não verbais e entender os verdadeiros
              interesses no ambiente? Veja o que está por trás das palavras e
              como decifrar intenções de forma precisa.
            </p>
          </div>
        </div>

        {/* Livro 3 */}
        <div className="flex items-center gap-6">
          <img
            src={ebookTecnicas}
            alt="Expressão de Alto Impacto"
            className="w-32 h-auto rounded shadow"
          />
          <div>
            <h3 className="font-black mb-1 text-center">Arsenal da Atração</h3>
            <p className="text-xs text-center text-neutral-400 font-bold">
              Desenvolva linguagem corporal, estilo pessoal e formas de
              comunicação que geram percepção de valor. Não se trata de atuar.
              Trata-se de ser percebido de forma clara, segura e autêntica.
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-10 font-bold text-lg">
        Conhecimento é liberdade. E liberdade é escolha. Compreenda mais, decida
        melhor.
      </h3>
    </div>
  );
}
