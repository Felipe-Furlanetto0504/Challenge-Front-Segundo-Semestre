import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-blue-800 p-1 sm:p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide text-center sm:text-left mb-2 sm:mb-0">
        Consulta-Facíl
      </h1>
      <div className="w-full sm:w-auto flex justify-center sm:justify-end">
        <Menu />
      </div>
    </header>
  );
}
