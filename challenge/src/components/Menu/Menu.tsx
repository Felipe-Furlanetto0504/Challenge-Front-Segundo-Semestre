import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="relative">
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="sm:hidden text-white text-2xl focus:outline-none"
      >
        {menuAberto ? "✕" : "☰"}
      </button>

      <div
        className={`${
          menuAberto ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row sm:items-center sm:justify-end gap-4 sm:gap-6 text-white font-medium p-2 absolute sm:static bg-[#8ae4f1] sm:bg-transparent top-10 right-0 sm:top-auto sm:right-auto rounded-md sm:rounded-none shadow-md sm:shadow-none z-50`}
      >
        <Link
          to="/"
          className="hover:text-gray-200 transition"
          onClick={() => setMenuAberto(false)}
        >
          Home
        </Link>
        <Link
          to="/remedios"
          className="hover:text-gray-200 transition"
          onClick={() => setMenuAberto(false)}
        >
          Rémedios
        </Link>
        <Link
          to="/contato"
          className="hover:text-gray-200 transition"
          onClick={() => setMenuAberto(false)}
        >
          Contato
        </Link>
        <Link
          to="/faq"
          className="hover:text-gray-200 transition"
          onClick={() => setMenuAberto(false)}
        >
          Faq
        </Link>
        <Link
          to="/sobre"
          className="hover:text-gray-200 transition"
          onClick={() => setMenuAberto(false)}
        >
          Sobre
        </Link>
        <Link
          to="/cadastro"
          className="hover:text-gray-200 transition"
          onClick={() => setMenuAberto(false)}
        >
          Cadastro
        </Link>
        <Link
          to="/integrantes"
          className="hover:text-gray-200 transition"
          onClick={() => setMenuAberto(false)}
        >
          Integrantes
        </Link>
        <Link
          to="/agendar"
          className="hover:text-gray-200 transition"
          onClick={() => setMenuAberto(false)}
        >
          Agendar Exame
        </Link>
      </div>
    </nav>
  );
}
