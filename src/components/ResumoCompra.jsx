// src/components/ResumoCompra.js
import React, { useState } from "react";
import garantia from "../assets/garantia.webp";
import { div } from "framer-motion/client";

export default function ResumoCompra({
  selecionados,
  totalOriginal,
  totalAtual,
  descontoTotal,
  pagamento,
  onSubmit,
  loading,
  qrCodeData,
}) {
  const [copiado, setCopiado] = useState(false);

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(qrCodeData.emv);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar Pix:", err);
    }
  };

  return (
    <section className="flex flex-col gap-2 justify-start items-center rounded-xl w-96 px-4 py-10 bg-white shadow-md my-10 lg:my-0">
      <h1 className="font-bold text-2xl">Resumo da compra</h1>

      <div className="px-10 my-10 flex flex-col text-start w-full border-2 border-dotted border-neutral-800 rounded-lg py-5">
        <p className="font-medium">Itens:</p>
        <div className="flex flex-col gap-5">
          {selecionados.map((item) => (
            <div>
              <div
                className="flex justify-between gap-4 items-center"
                key={item.id}
              >
                <p className="font-bold text-pink-500">{item.nome}</p>
                <p className="font-medium">R${item.precoOriginal.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between w-full px-10">
        <p className="font-medium">Total:</p>
        <p>R${totalOriginal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between w-full px-10">
        <p className="font-medium">Descontos:</p>
        <p className="font-medium">R${descontoTotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between w-full px-10">
        <p className="font-medium">Taxa de entrega:</p>
        <p>R$0,00</p>
      </div>

      <div className="flex justify-between w-full px-10 mt-4">
        <p className="font-medium">Total a ser pago:</p>
        <p className="font-bold text-green-700 text-lg">
          R${totalAtual.toFixed(2)}
        </p>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded font-semibold my-10 shadow-md shadow-neutral-600 ${
          loading ? "opacity-80 cursor-not-allowed" : "hover:bg-green-800"
        }`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              />
            </svg>
            Aguarde, gerando pagamento...
          </>
        ) : (
          "Finalizar Pagamento"
        )}
      </button>

      {pagamento === "pix" && qrCodeData?.base64 && (
        <div className="mt-4 space-y-2 border border-green-700 rounded-lg p-4">
          <p className="text-sm">✅ Pagamento gerado via Pix</p>
          <img
            src={`data:image/png;base64,${qrCodeData.base64}`}
            alt="QR Code PIX"
            className="mx-auto max-w-xs border rounded-md"
          />
          <button
            onClick={copiarPix}
            className="text-xs break-words text-center w-full p-2 border border-pink-500 rounded bg-pink-100 hover:bg-pink-200 transition"
          >
            {copiado
              ? "✅ Copiado para a área de transferência!"
              : qrCodeData.emv}
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            Válido até:{" "}
            {new Date(qrCodeData.vencimento).toLocaleString("pt-BR")}
          </p>
        </div>
      )}
      <img src={garantia} alt="" className="size-40" />
    </section>
  );
}
