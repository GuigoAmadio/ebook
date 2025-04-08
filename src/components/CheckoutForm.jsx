// CheckoutForm.js
import React from "react";
import coelinho from "../assets/coelinho.png";
import seguro from "../assets/seguro.png";

export default function CheckoutForm({ form, setForm }) {
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Finalizando Compra</h1>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Seu e-mail"
        className="input w-full"
        required
      />
      <input
        name="celular"
        type="tel"
        value={form.celular}
        onChange={handleChange}
        placeholder="Celular com DDD"
        className="input w-full"
        required
      />
      <input
        name="cpf"
        type="text"
        value={form.cpf}
        onChange={handleChange}
        placeholder="CPF"
        className="input w-full"
        required
      />
      <div className="flex gap-4">
        {["pix", "cartao"].map((tipo) => (
          <button
            key={tipo}
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, pagamento: tipo }))}
            className={`flex-1 p-3 rounded border ${
              form.pagamento === tipo ? "bg-green-700 text-white" : "bg-white"
            }`}
          >
            {tipo === "pix" ? "PIX" : "Cartão"}
          </button>
        ))}
      </div>
      {form.pagamento === "cartao" && (
        <div className="space-y-2 pt-4">
          <input
            id="cardNumber"
            placeholder="Número do cartão"
            className="input w-full"
          />
          <div className="flex gap-2">
            <input id="expMonth" placeholder="Mês" className="input w-1/3" />
            <input id="expYear" placeholder="Ano" className="input w-1/3" />
            <input id="cvv" placeholder="CVV" className="input w-1/3" />
          </div>
          <input
            id="cardholderName"
            placeholder="Nome no cartão"
            className="input w-full"
          />
        </div>
      )}
      {form.pagamento === "pix" && (
        <div className="mt-4 p-4 border-2 border-dashed border-green-700 text-sm rounded-md space-y-4">
          <p>✅ Liberação imediata</p>
          <p>✅ Pague escaneando o QR Code abaixo</p>
        </div>
      )}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
          <img src={coelinho} alt="" className="size-6" />
          <h2 className="font-extrabold text-neutral-600">
            Lucrando com a pascoa
          </h2>
        </div>
        <p className="text-neutral-800 text-sm my-3">
          Este pagamento esta sendo processado com seguranca pela AppMax
        </p>
        <div className="flex items-center mb-4">
          <img src={seguro} alt="" className="size-3 mr-2" />
          <h3 className="text-green-500 text-sm">Compra 100% segura!</h3>
        </div>
        <p className="text-xs mb-2">
          Este site é protegido pelo reCAPTCHA do Google
        </p>
        <p className="text-xs">
          <span className="font-bold">Política de privacidade</span> e{" "}
          <span className="font-bold">Termos de serviço</span>
        </p>
      </div>
    </form>
  );
}
