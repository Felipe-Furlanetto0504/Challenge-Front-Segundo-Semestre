import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Cadastro } from "../../types/cadastro";

export default function Cadastro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Cadastro>();

  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data: Cadastro) => {
    try {
      const response = await fetch("http://localhost:3000/pacientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro ao cadastrar");

      setSuccessMessage("Cadastro realizado");
      setTimeout(() => {
        navigate("/remedios");
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar. Tente novamente.");
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
            type="email"
            placeholder="SeuEmail@.com"
            {...register("email", { required: "O email é obrigatório" })}
            className="mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
          {errors.email && (
            <span className="text-red-600 text-xs sm:text-sm mt-1">
              {errors.email.message}
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
