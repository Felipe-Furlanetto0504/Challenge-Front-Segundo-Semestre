import { useState } from "react";
import type { Consulta } from "../../types/consulta";

export default function Agendar() {
  const [formData, setFormData] = useState<Consulta>({
    nome: "",
    email: "",
    data: "",
    hora: "",
    observacoes: "",
  });

  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/consultas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados para o servidor.");
      }

      setMensagemSucesso("Consulta agendada com sucesso!");
      console.log("Consulta salva em db.json:", formData);

      setFormData({
        nome: "",
        email: "",
        data: "",
        hora: "",
        observacoes: "",
      });

      setTimeout(() => setMensagemSucesso(""), 4000);
    } catch (error) {
      alert("Falha ao salvar a consulta. Verifique o servidor JSON.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="bg-[#f2f9ff] min-h-screen min-w-screen flex items-center justify-center p-4 sm:p-6">
    <div className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-lg border border-gray-200 p-2 sm:p-2 md:p-2">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Agendamento de Consultas
      </h1>

      {mensagemSucesso && (
        <div className="mb-4 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center text-sm sm:text-base">
          {mensagemSucesso}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
            Nome do Paciente
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
              Data
            </label>
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
              Hora
            </label>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
            Observações
          </label>
          <input
            type="text"
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            placeholder="Descreva os sintomas"
            className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading ? "Enviando..." : "Confirmar Agendamento"}
        </button>
      </form>
    </div>
  </section>
);

}