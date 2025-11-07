import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Tiporemedio } from "../../types/tipoRemedio";
import Informacoes from "../../components/Informacoes/Informacoes";

export default function VisualizarRemedios() {
  const { id_remedio } = useParams<{ id_remedio: string }>();
  const [remedio, setRemedios] = useState<Tiporemedio | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Ver Remédios";
  }, []);

  useEffect(() => {
    const fetchRemedio = async () => {
      try {
        if (!id_remedio) return;

        // ✅ Rota correta conforme seu back-end: /remedios/{id}
        const response = await fetch(`http://localhost:8080/remedios/${id_remedio}`);

        if (!response.ok) throw new Error("Erro ao buscar o remédio");

        const data: Tiporemedio = await response.json();
        console.log("✅ Dados recebidos:", data);
        setRemedios(data);
        setErro(null);
      } catch (error) {
        console.error("❌ Erro ao buscar o remédio:", error);
        setErro("Não foi possível carregar o remédio.");
      }
    };

    fetchRemedio();
  }, [id_remedio]);

  return (
    <main className="min-h-screen bg-[#e6f9fc] flex flex-col items-center p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-cyan-700 text-center sm:text-left w-full max-w-4xl mb-4">
        Ver Remédios
      </h1>

      {erro && (
        <p className="text-red-600 text-center text-sm sm:text-base mt-6">
          {erro}
        </p>
      )}

      {remedio ? (
        <div className="w-full max-w-4xl">
          <Informacoes

            idprops={remedio.id_remedio}
            nomeprops={remedio.nome_remedio}
            precoprops={remedio.preco_remedio}
            descricaoprops={remedio.descricao_remedio}
            quantidadeprops={remedio.quantidade_remedio}
          />
        </div>
      ) : (
        !erro && (
          <p className="text-gray-700 text-center text-sm sm:text-base mt-6">
            Carregando informações do remédio...
          </p>
        )
      )}
    </main>
  );
}
