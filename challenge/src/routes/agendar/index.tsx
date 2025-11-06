import { useState } from "react";
import type { Consulta } from "../../types/consulta";

export default function Agendar() {
  const [formData, setFormData] = useState<Consulta>({
    nome: "",
    email: "",
    especialidade: "",
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

  const handleEspecialidade = (especialidade: string) => {
    setFormData({ ...formData, especialidade });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.especialidade) {
      alert("Selecione uma especialidade antes de confirmar o agendamento.");
      return;
    }

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
        especialidade: "",
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
    <section className="bg-[#f2f9ff] min-h-screen min-w-screen flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg border border-gray-200 p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Agendamento de Consultas
        </h1>

        {mensagemSucesso && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
            {mensagemSucesso}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nome do Paciente
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Especialidade
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["Cardiologia", "Dermatologia", "Pediatria", "Ortopedia"].map(
                (esp) => (
                  <button
                    key={esp}
                    type="button"
                    onClick={() => handleEspecialidade(esp)}
                    className={`border rounded-lg p-2 font-medium transition ${
                      formData.especialidade === esp
                        ? "bg-blue-600 text-white border-blue-700"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {esp}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Data
              </label>
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Hora
              </label>
              <input
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Observações
            </label>
            <input
              type="text"
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
              placeholder="Descreva os sintomas"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-2 rounded-lg transition-all duration-300 ${
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