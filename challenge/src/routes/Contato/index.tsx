import { useEffect } from "react";

export default function Contato() {

  useEffect(() => {
    document.title = "Contato";
  }, []);

  return (
  <main>
    <h1 className="bg-[#e6f9fc] text-2xl sm:text-3xl font-bold p-4 text-cyan-700 text-center sm:text-left">
      Contato
    </h1>

    <section className="p-4 sm:p-6 bg-[#e6f9fc] space-y-6 sm:space-y-8 flex flex-col items-center min-h-screen min-w-screen">
      <div className="w-full max-w-3xl">
        <h2 className="font-semibold italic text-gray-800 text-base sm:text-lg">
          Endereço:
        </h2>
        <div className="bg-white border border-gray-400 rounded-md p-3 sm:p-4 mt-1 shadow-sm">
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Av. Dr. Enéas de Carvalho Aguiar, 255 — Cerqueira César — 05403-000  
            São Paulo - Brasil  
            <br />
            Tel.: (011) 2661-0000
          </p>
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <h2 className="font-semibold italic text-gray-800 text-base sm:text-lg">
          E-mail:
        </h2>
        <div className="bg-white border border-gray-400 rounded-md p-3 sm:p-4 mt-1 shadow-sm">
          <p className="text-gray-800 text-sm sm:text-base">
            webmaster.nci@hc.fm.usp.br
          </p>
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <h2 className="font-semibold italic text-gray-800 text-base sm:text-lg">
          Site Oficial:
        </h2>
        <div className="bg-white border border-gray-400 rounded-md p-3 sm:p-4 mt-1 shadow-sm">
          <a
            href="http://www.hc.fm.usp.br"
            className="text-blue-600 hover:underline text-sm sm:text-base break-words"
          >
            Portal Oficial do HC
          </a>
        </div>
      </div>
    </section>
  </main>
);

  
}
