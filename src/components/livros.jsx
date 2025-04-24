import ebookBiologico from "../assets/ebookBiologico.png";
import ebookSocial from "../assets/ebookSocial.png";
import ebookTecnicas from "../assets/ebookTecnicas.png";

export default function ComboEbooks() {
  return (
    <div className="bg-neutral-900 text-white min-h-screen px-4 py-16 sm:px-8 md:px-16">
      <h2 className="text-xl md:text-3xl font-semibold mb-2 text-center">
        Melhor do que um… <span className="text-orange-600">Três.</span> Três
        caminhos pra jogar o jogo{" "}
        <span className="text-red-600">acima da média.</span>
      </h2>
      <h3 className="font-medium mb-10 text-center mt-8">
        Voce pode tentar seduzir no chute… Ou pode carregar o arsenal certo e
        entrar pra vencer.{" "}
        <span className="text-orange-600">
          Esses guias são a continuação brutal do Manual Secreto da Sedução
        </span>{" "}
        — só que agora, o buraco é mais embaixo. A gente desceu fundo nos 3
        pilares que{" "}
        <span className="text-orange-600">
          realmente fazem a diferença no jogo:
        </span>
        <span className="text-green-600"> Biologia</span>,{" "}
        <span className="text-cyan-500">Sociedade </span>e{" "}
        <span className="text-yellow-400">Técnica.</span> E não, não é mais blá
        blá blá de teoria. Aqui tem prática. Ferramenta de verdade. Coisa pra
        usar no campo de batalha.
      </h3>

      <div className="space-y-10">
        {/* Livro 1 */}
        <div className="flex items-center justify-center gap-6">
          <img
            src={ebookBiologico}
            alt="Instinto de Sedução"
            className="w-32 h-auto rounded shadow"
          />
          <div>
            <h3 className="font-black mb-1 text-center">Instinto de Sedução</h3>
            <p className="text-center text-xs text-neutral-400 font-bold">
              Por que algumas conexões pegam fogo… e outras morrem no "Oi"?{" "}
              <br />
              Sociologia. Psicologia. Comportamento humano. O manual das
              entrelinhas que te ensina a enxergar o que ela não diz — mas tá
              gritando com o corpo, com o olhar, com o jeito que mexe o cabelo.
              Aprenda a criar presença. Chegue num lugar e pare o ambiente. Ela
              vai sentir. Todo mundo vai sentir.
            </p>
          </div>
        </div>

        {/* Livro 2 */}
        <div className="flex items-center gap-6">
          <img
            src={ebookSocial}
            alt="O Jogo Invisível"
            className="w-32 h-auto rounded shadow"
          />
          <div>
            <h3 className="font-black mb-1 text-center">O Jogo Invisível</h3>
            <p className="text-xs text-center text-neutral-400 font-bold">
              Hormônios, evolução, instintos. O que REALMENTE está acontecendo
              no corpo e na cabeça durante a atração? <br /> Você sabe o que
              dispara o desejo nela? Sabe o que acontece dentro de você quando
              ela passa, e sua pulsação dispara? Depois desse guia, vai saber. E
              o melhor: vai saber como causar isso a ela. Ela não vai entender
              por que se sente tão atraída… mas vai sentir.
            </p>
          </div>
        </div>

        {/* Livro 3 */}
        <div className="flex items-center gap-6">
          <img
            src={ebookTecnicas}
            alt="Arsenal da Atração"
            className="w-32 h-auto rounded shadow"
          />
          <div>
            <h3 className="font-black mb-1 text-center">Arsenal da Atração</h3>
            <p className="text-xs text-center text-neutral-400 font-bold">
              A sedução não tá só no papo. Tá na sua vibe. No que você transmite
              quando entra num ambiente. <br /> Estilo, postura, linguagem
              corporal, hábitos, energia. Você não vai aprender a parecer
              confiante. Vai aprender a ser confiante. Porque quem tenta fingir…
              perde. Quem é de verdade… domina.
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-10 font-bold text-lg">
        Escolha certo. Porque se você não domina as regras… você é só mais um
        peão no tabuleiro.
      </h3>
    </div>
  );
}
