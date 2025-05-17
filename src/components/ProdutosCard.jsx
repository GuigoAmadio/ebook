export default function ProdutosCard({
  produtos = [],
  produtosSelecionados = [],
  onToggle,
}) {
  return (
    <div className="space-y-8">
      {produtos.map((produto) => {
        const { id, nome, precoOriginal, precoAtual, imagem } = produto;
        const selecionado = produtosSelecionados.includes(id);
        const porcentagemDesconto = Math.round(
          ((precoOriginal - precoAtual) / precoOriginal) * 100
        );

        return (
          <label
            key={id}
            className="flex text-white items-center justify-between gap-3 bg-orange-900 shadow-md shadow-orange-800 rounded-xl px-4 py-2 w-full cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selecionado}
                onChange={() => onToggle(id)}
                className="accent-green-400"
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
                <span className="text-lime-400 font-bold text-lg">
                  ({porcentagemDesconto}% OFF)
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg text-nowrap line-through text-red-600">
                De R${(precoOriginal || 0).toFixed(2)}
              </span>
              <span className="text-lime-400 text-nowrap text-lg">
                Por R${(precoAtual || 0).toFixed(2)}
              </span>
            </div>
          </label>
        );
      })}
    </div>
  );
}
