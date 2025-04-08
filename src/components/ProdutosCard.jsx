export default function ProdutosCard({
  produtos = [],
  produtosSelecionados = [],
  onToggle,
}) {
  return (
    <div className="space-y-2">
      {produtos.map((produto) => {
        const { id, nome, precoOriginal, precoAtual, imagem } = produto;
        const selecionado = produtosSelecionados.includes(id);

        return (
          <label
            key={id}
            className="flex items-center justify-between gap-3 bg-white shadow-md rounded-xl px-4 py-2 w-full cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selecionado}
                onChange={() => onToggle(id)}
                className="accent-pink-500"
              />
              {imagem && (
                <img
                  src={imagem}
                  alt={nome}
                  className="w-20 h-30 object-cover rounded"
                />
              )}
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{nome}</span>
                <span className="text-xs line-through text-gray-400">
                  R${(precoOriginal || 0).toFixed(2)}
                </span>
              </div>
            </div>
            <span className="text-pink-500 font-bold text-sm">
              R${(precoAtual || 0).toFixed(2)}
            </span>
          </label>
        );
      })}
    </div>
  );
}
