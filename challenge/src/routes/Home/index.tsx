import { useEffect } from "react";
import medico from "../../img/medico.jpg";


export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

return (
  <main>
    <h1 className="bg-[#e6f9fc] text-2xl sm:text-3xl md:text-4xl font-bold text-center text-cyan-700 p-4">
      Hospital Das Clínicas
    </h1>

    <section className="min-h-screen bg-[#e6f9fc] flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="p-4 flex flex-col items-center max-w-full sm:max-w-4xl">
        <img
          src={medico}
          alt="Médico"
          className="rounded-md shadow-md w-64 sm:w-80 md:w-[500px] h-auto object-cover"
        />

        <h2 className="mt-4 text-base sm:text-lg md:text-xl font-semibold italic text-[#092d42] text-center">
          Seja Bem-Vindo
        </h2>

        <div className="max-w-full sm:max-w-3xl bg-white border border-black rounded-md shadow-md p-4 sm:p-6 leading-relaxed space-y-4 mt-4">
          <p className="text-justify text-gray-800 text-sm sm:text-base">
            No Hospital das Clínicas, acreditamos que cuidar da saúde vai além
            do atendimento médico: envolve acolhimento, praticidade e respeito.
            Pensando especialmente em nossos pacientes idosos, desenvolvemos o
            Consulta Fácil, uma solução criada para tornar o processo de marcar
            consultas médicas simples, rápido e acessível.
          </p>

          <p className="text-justify text-gray-800 text-sm sm:text-base">
            Sabemos que muitas vezes a tecnologia pode ser uma barreira. Por
            isso, nossa plataforma foi pensada para ser intuitiva e de fácil
            navegação, permitindo que cada paciente ou familiar agende consultas
            de forma segura, sem complicações e no conforto de casa.
          </p>

          <p className="text-justify text-gray-800 text-sm sm:text-base">
            Selecione uma das opções logo acima: Rémedios, Contato, Faq, Sobre,
            Cadastro ou Integrantes.
          </p>
        </div>
      </div>
    </section>
  </main>
);

}
