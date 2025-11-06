import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    document.title = "Faq";
  }, []);

return (
  <main>
    <h1 className="bg-[#e6f9fc] text-2xl sm:text-3xl font-bold p-4 text-cyan-700 text-center sm:text-left">
      Faq
    </h1>

    <section className="space-y-4 sm:space-y-6 p-4 sm:p-6 bg-[#e6f9fc] h-153 flex flex-col items-center">
      <div className="bg-[#28659b] border border-black rounded-md p-3 sm:p-4 w-full max-w-3xl text-white shadow-md">
        <h2 className="font-bold text-lg sm:text-xl">Como agendar uma consulta no HC?</h2>
        <p className="text-sm sm:text-base">
          Pelo SUS, com encaminhamento feito por um médico da UBS.
        </p>
      </div>

      <div className="bg-[#28659b] border border-black rounded-md p-3 sm:p-4 w-full max-w-3xl text-white shadow-md">
        <h2 className="font-bold text-lg sm:text-xl">Tenho pedido médico. Posso levar ao HC?</h2>
        <p className="text-sm sm:text-base">
          Não. Leve o pedido à UBS, que fará o encaminhamento pelo SUS.
        </p>
      </div>

      <div className="bg-[#28659b] border border-black rounded-md p-3 sm:p-4 w-full max-w-3xl text-white shadow-md">
        <h2 className="font-bold text-lg sm:text-xl">Posso agendar pela internet?</h2>
        <p className="text-sm sm:text-base">
          Sim. Agora nesse site é possível agendar pela internet.
        </p>
      </div>

      <div className="bg-[#28659b] border border-black rounded-md p-3 sm:p-4 w-full max-w-3xl text-white shadow-md">
        <h2 className="font-bold text-lg sm:text-xl">E em caso de urgência?</h2>
        <p className="text-sm sm:text-base">
          Vá a uma UPA ou pronto-socorro. Se necessário, eles encaminham para o HC.
        </p>
      </div>

      <div className="bg-[#28659b] border border-black rounded-md p-3 sm:p-4 w-full max-w-3xl text-white shadow-md">
        <h2 className="font-bold text-lg sm:text-xl">Como reagendar ou cancelar?</h2>
        <p className="text-sm sm:text-base">Procure a UBS onde o pedido foi feito.</p>
      </div>
    </section>
  </main>
);

}
