export default function Rodape() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center bg-blue-900 text-white text-sm sm:text-base p-4 sm:p-6 text-center sm:text-left">
      <p className="mb-2 sm:mb-0">
        &copy; Todos os direitos reservados - 2025 Site HC-
      </p>
      <a
        href="https://www.instagram.com/hospitalhcfmusp"
        className="hover:underline hover:text-gray-300 transition-colors"
      >
        Pagína do Instagram
      </a>
    </footer>
  );
}
