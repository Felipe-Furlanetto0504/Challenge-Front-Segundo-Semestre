import { useEffect, useState } from "react";
import type { Tiporemedio } from "../../types/tipoRemedio";

export default function Remedios() {
 useEffect(() => {
    document.title = "Rémedios";
  }, []);

  const [remedios, setRemedios] = useState<Tiporemedio[]>([]);

  const fetchRemedios = async () => {
    try {
      const response = await fetch("http://localhost:8080/remedios");
      if (!response.ok) throw new Error("Erro ao buscar os remédios.");
      const data: Tiporemedio[] = await response.json();
      setRemedios(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    fetchRemedios();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Deseja realmente deletar este remédio?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:8080/remedios/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao deletar o remédio.");

      setRemedios((prev) => prev.filter((item) => item.id_remedio !== id));
      alert("Remédio deletado com sucesso.");
    } catch (error) {
      console.error("Erro:", error);
      alert("Não foi possível deletar o remédio.");
    }
  };

  return (
    <main>
      <h1 className="bg-[#e6f9fc] text-2xl md:text-3xl font-bold p-4 text-cyan-700 text-center md:text-left">
        Rémedios
      </h1>

      <section className="bg-[#e6f9fc] min-h-screen p-3 sm:p-6 flex justify-center">
        <div className="w-full max-w-6xl overflow-x-auto rounded-lg shadow-md border border-gray-300 bg-[#37a1b1]">
          <table className="min-w-full text-xs sm:text-sm md:text-base border-collapse">
            <thead className="bg-cyan-700 text-white">
              <tr>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left">ID</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left">NOME</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left">PREÇO</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left">DESCRIÇÃO</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left">QUANTIDADE</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left">AÇÕES</th>
              </tr>
            </thead>

            <tbody>
              {remedios.map((remedio) => (
                <tr
                  key={remedio.id_remedio}
                  className="border-b hover:bg-[#18738033] transition-colors"
                >
                  <td className="px-2 sm:px-4 md:px-6 py-3 text-gray-800">{remedio.id_remedio}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-3">{remedio.nome_remedio}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-3">R$ {remedio.preco_remedio}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-3">{remedio.descricao_remedio}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-3">{remedio.quantidade_remedio}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-3">
                    <button
                      onClick={() => handleDelete(remedio.id_remedio)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md font-medium transition text-xs sm:text-sm md:text-base w-full sm:w-auto"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot className="bg-[#71aab399] text-gray-700 font-medium">
              <tr>
                <td colSpan={6} className="px-3 sm:px-6 py-3 text-center md:text-left">
                  Total de Rémedios: {remedios.length}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </main>
  );
}
