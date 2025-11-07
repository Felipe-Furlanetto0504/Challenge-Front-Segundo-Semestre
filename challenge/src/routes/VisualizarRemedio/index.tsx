import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Tiporemedio } from "../../types/tipoRemedio";
import Informacoes from "../../components/Informacoes/Informacoes";

export default function VisualizarRemedios() {
  useEffect(() => {
    document.title = "Ver Remédios";
  }, []);

  const { id } = useParams();
  const [remedio, setRemedios] = useState<Tiporemedio>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:8080/remedios/${id}`);
        if (!response.ok) throw new Error("Erro na API");
        const data: Tiporemedio = await response.json();

        setRemedios(data);
      } catch (error) {
        console.error("Erro ao buscar o remédio:", error);
      }
    })();
  }, [id]);

 return (
  <main className="min-h-screen bg-[#e6f9fc] flex flex-col items-center p-4 sm:p-6">
    <h1 className="text-2xl sm:text-3xl font-bold text-cyan-700 text-center sm:text-left w-full max-w-4xl mb-4">
      Ver Remédios
    </h1>

    {remedio ? (
      <div className="w-full max-w-4xl">
        <Informacoes
          idprops={remedio.id_remedio}
          nomeprops={remedio.nome_remedio}
          precoprops={remedio.preco_remedio}
          descricaoprops={remedio.descricao_remedio}
        />
      </div>
    ) : (
      <p className="text-gray-700 text-center text-sm sm:text-base mt-6">
        Não tem esse remédio disponível
      </p>
    )}
  </main>
);

}
