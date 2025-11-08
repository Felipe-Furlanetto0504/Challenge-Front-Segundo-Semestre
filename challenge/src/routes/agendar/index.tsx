import { useState } from "react";

export default function Agendar() {
  const [formData, setFormData] = useState({
    nome_consulta: "",
    descricao_consulta: "",
    data: "",
    hora: "",
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
      
      const datahora_consulta =
        `${formData.data.split("-").reverse().join("/")}` + ` ${formData.hora}`;

      const payload = {
        id_consulta: 0,
        datahora_consulta,
        descricao_consulta: formData.descricao_consulta,
        nome_consulta: formData.nome_consulta,
      };

      const response = await fetch("http://localhost:8080/consulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados para o servidor.");
      }

      setMensagemSucesso("Consulta cadastrada com sucesso!");
      setFormData({
        nome_consulta: "",
        descricao_consulta: "",
        data: "",
        hora: "",
      });

      setTimeout(() => setMensagemSucesso(""), 4000);
    } catch (error) {
      alert("Falha ao cadastrar a consulta. Verifique o backend.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#e6f9fc] min-h-screen min-w-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Agendar Consulta
        </h1>

        {mensagemSucesso && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
            {mensagemSucesso}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nome do Usuário
            </label>
            <input
              type="text"
              name="nome_consulta"
              placeholder="SeuNome"
              value={formData.nome_consulta}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Descrição / Motivo
            </label>
            <input
              type="text"
              name="descricao_consulta"
              value={formData.descricao_consulta}
              onChange={handleChange}
              placeholder="Ex: Rotina, retorno, sintomas..."
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
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
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
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
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
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
