import ebookBiologico from "../assets/ebookBiologico.png";
import ebookSocial from "../assets/ebookSocial.png";
import ebookTecnicas from "../assets/ebookTecnicas.png";

export default function ComboEbooks() {
  return (
    <div className="bg-neutral-900 text-white min-h-screen px-4 py-16 sm:px-8 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
        Melhor do que um, três.
      </h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
        Cada um destes guias sao aprofundamentos dos 3 principais pilares
        apresentados no Manual Secreto da seducao. <br />
        Apresentamos um estudo profundo a respeito das esferas Biologicas,
        Sociais e Tecnicas do mundo feminino. <br />
        Abrangendo alem do estudo teorico, multiplas praticas estao presentes em
        cada capitulo.
      </h3>

      <div className="space-y-10">
        {/* Livro 1 */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={ebookBiologico}
            alt="Instinto de Sedução"
            className="w-40 h-auto rounded shadow"
          />
          <div>
            <h3 className="text-lg font-black mb-1 text-center">
              Instinto de Sedução
            </h3>
            <p className="text-center text-neutral-400 font-bold">
              Uma análise profunda sobre como a sedução acontece no dia a dia,
              sob a lente da sociologia, psicologia e comportamento humano.
              Aprenda a criar conexões genuínas, entender os códigos sociais e
              desenvolver presença marcante em qualquer ambiente.
            </p>
          </div>
        </div>

        {/* Livro 2 */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={ebookSocial}
            alt="O Jogo Invisível"
            className="w-40 h-auto rounded shadow"
          />
          <div>
            <h3 className="text-lg font-black mb-1 text-center">
              O Jogo Invisível
            </h3>
            <p className="text-center text-neutral-400 font-bold">
              Você sabe o que está acontecendo no cérebro e no corpo durante a
              atração? Este eBook revela como hormônios, evolução e instintos
              moldam a sedução moderna. Entenda o que você sente. E por que ela
              sente também.
            </p>
          </div>
        </div>

        {/* Livro 3 */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={ebookTecnicas}
            alt="Arsenal da Atração"
            className="w-40 h-auto rounded shadow"
          />
          <div>
            <h3 className="text-lg font-black mb-1 text-center">
              Arsenal da Atração
            </h3>
            <p className="text-center text-neutral-400 font-bold">
              A sedução não está só no papo. Está em como você vive. Este guia
              te ajuda a construir uma imagem autêntica e magnética — estilo,
              hábitos, linguagem corporal e autoconfiança. Você não finge. Você
              se torna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
