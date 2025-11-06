import { useEffect, useState } from "react";
import type { Tiporemedio } from "../../types/tipoRemedio";
import { Link } from "react-router-dom";

export default function Remedios() {
  useEffect(() => {
    document.title = "Rémedios";
  }, []);

  const [remedios, setRemedios] = useState<Tiporemedio[]>([]);

  useEffect(() => {
    const fetchRemedios = async () => {
      const response = await fetch("http://localhost:3000/remedios");
      const data: Tiporemedio[] = await response.json();
      setRemedios(data);
    };

    fetchRemedios();
  }, []);

 return (
  <main>
    <h1 className="bg-[#e6f9fc] text-2xl sm:text-3xl font-bold p-4 text-cyan-700 text-center sm:text-left">
      Rémedios
    </h1>

    <section className="bg-[#e6f9fc] h-159 p-4 sm:p-6 flex justify-center">
      <div className="overflow-x-auto w-full max-w-5xl">
        <table className="min-w-full border border-gray-300 text-sm sm:text-base bg-[#18738099] rounded-md shadow-md">
          <thead className="bg-cyan-700 text-white">
            <tr>
              <th className="px-3 sm:px-6 py-2 text-left">ID</th>
              <th className="px-3 sm:px-6 py-2 text-left">NOME</th>
              <th className="px-3 sm:px-6 py-2 text-left">PREÇO</th>
              <th className="px-3 sm:px-6 py-2 text-left">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {remedios.map((remedios, id) => (
              <tr
                key={id}
                className="border-b hover:bg-[#18738099] transition-colors"
              >
                <td className="px-3 sm:px-6 py-2">{remedios.id}</td>
                <td className="px-3 sm:px-6 py-2">{remedios.nome}</td>
                <td className="px-3 sm:px-6 py-2">{remedios.preco}</td>
                <td className="px-3 sm:px-6 py-2">
                  <Link
                    to={`/visualizar/remedios/${remedios.id}`}
                    className="text-cyan-900 hover:underline"
                  >
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-[#71aab399]  text-gray-700 font-medium">
            <tr>
              <td colSpan={2} className="px-3 sm:px-6 py-2">
                Todos os Rémedios: {remedios.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </main>
);
}
