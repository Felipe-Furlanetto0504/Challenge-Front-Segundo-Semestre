import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Cadastro } from "../../types/cadastro";

export default function Cadastro() {
  const URL_API = "http://localhost:8080/login";
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Cadastro>();

  const onSubmit = async (data: Cadastro) => {
    try {
      const checkRes = await fetch(`${URL_API}`);
      if (!checkRes.ok) throw new Error("Erro ao buscar usuários");

      const existingUsers: Cadastro[] = await checkRes.json();

      // Verifica se já existe um usuário com o mesmo nome
      const userExists = existingUsers.some(
        (user) => user.usuario.toLowerCase() === data.usuario.toLowerCase()
      );

      if (userExists) {
        alert("Usuário já cadastrado.");
        return;
      }

      const createRes = await fetch(URL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!createRes.ok) throw new Error("Erro ao cadastrar paciente");

      const pacienteRes = await fetch(`${URL_API}?usuario=${data.usuario}`);
      const pacienteCriado: Cadastro[] = await pacienteRes.json();

      localStorage.setItem("Usuario", data.usuario);
      localStorage.setItem("idPaciente", pacienteCriado[0].idLogin.toString());

      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar paciente.");
    }
  };

  return (
    <section className="bg-[#e6f9fc] min-h-screen min-w-screen p-4 sm:p-6">
      <div className="w-full max-w-sm sm:max-w-md mx-auto mt-8 sm:mt-12 p-4 sm:p-6 border border-gray-300 rounded-xl shadow-md bg-white">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Cadastro de Paciente
        </h1>

        {successMessage && (
          <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-400 rounded-md text-center text-sm sm:text-base">
            {successMessage}
          </div>
        )}

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label className="mt-4 font-medium text-sm sm:text-base">
            Email:
          </label>
          <input
            type="text"
            placeholder="SeuNome"
            {...register("usuario", { required: "O Nome é obrigatório" })}
            className="mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
          {errors.usuario && (
            <span className="text-red-600 text-xs sm:text-sm mt-1">
              {errors.usuario.message}
            </span>
          )}

          <label className="mt-4 font-medium text-sm sm:text-base">
            Senha:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Crie uma senha"
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter no mínimo 6 caracteres",
                },
              })}
              className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10 text-sm sm:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
            >
              {showPassword ? "❌" : "👁️"}
            </button>
          </div>

          {errors.senha && (
            <span className="text-red-600 text-xs sm:text-sm mt-1">
              {errors.senha.message}
            </span>
          )}

          <button
            type="submit"
            className="mt-6 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}
