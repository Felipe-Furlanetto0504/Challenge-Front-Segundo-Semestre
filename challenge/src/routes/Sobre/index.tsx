import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre";
  }, []);

 return (
  <main>
    <h1 className="bg-[#e6f9fc] text-2xl sm:text-3xl font-bold p-4 text-cyan-700 text-center sm:text-left">
      Sobre
    </h1>

    <div className="flex justify-center items-center p-4 sm:p-6 bg-[#e6f9fc] min-h-screen ">
      <section className="w-full max-w-3xl bg-white border border-black rounded-md shadow-md p-4 sm:p-6 leading-relaxed space-y-4">
        <p className="text-justify text-gray-800 text-sm sm:text-base">
          O Hospital das Clínicas tem como missão oferecer cuidado de
          excelência, com tradição e compromisso na saúde da comunidade.
          Sabemos que muitos de nossos pacientes idosos encontram barreiras
          para realizar o agendamento de consultas, seja pela dificuldade em
          utilizar sistemas digitais ou pela limitação de tempo e
          deslocamento.
        </p>

        <p className="text-justify text-gray-800 text-sm sm:text-base">
          Pensando nisso, desenvolvemos uma plataforma acessível e
          simplificada, voltada especialmente para o público da terceira
          idade. Nossa solução prioriza facilidade de uso, clareza nas
          informações e atendimento humanizado, permitindo que cada paciente
          consiga marcar sua consulta de forma rápida, sem complicações e com
          total segurança.
        </p>

        <p className="text-justify text-gray-800 text-sm sm:text-base">
          Além do agendamento digital, nossa equipe de suporte está disponível
          para auxiliar em cada etapa do processo, garantindo que ninguém
          fique sem atendimento. O objetivo é unir tecnologia à tradição de
          décadas de cuidado médico, colocando o bem-estar dos nossos
          pacientes sempre em primeiro lugar.
        </p>
      </section>
    </div>
  </main>
);

}
