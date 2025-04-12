"use client";

import Link from "next/link";
import { useState } from "react";
import { Database } from "lucide-react";

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function AssessmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar email
    if (!email || !email.includes("@")) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setSubmitted(true);

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Database className="h-6 w-6" />
            <span className="font-bold text-xl">CoreData</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/productos" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Productos
            </Link>
            <Link href="/servicios" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Servicios
            </Link>
          </div>
          <Link href="/" className="text-sm font-medium bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Assessment Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Assessment Empresarial
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Responde las siguientes preguntas para conocer el nivel de madurez de tu empresa en el uso de datos.
            </p>

            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">
                  Email de contacto
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-3"
                  placeholder="tuemail@ejemplo.com"
                  required
                />
                {emailError && <p className="text-red-500 text-sm mt-1">Por favor ingresa un email válido.</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 mb-2">
                  ¿Tu empresa utiliza herramientas de análisis de datos?
                </label>
                <select className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-3">
                  <option>Sí</option>
                  <option>No</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 mb-2">
                  ¿Tienen un equipo dedicado a la analítica de datos?
                </label>
                <select className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-3">
                  <option>Sí</option>
                  <option>No</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 mb-2">
                  ¿Utilizan dashboards para la toma de decisiones?
                </label>
                <select className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-3">
                  <option>Sí</option>
                  <option>No</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 bg-purple-600 px-6 py-2 rounded-md hover:bg-purple-700 transition"
              >
                Enviar Respuestas
              </button>

              {submitted && (
                <p className="mt-4 text-green-400 text-lg font-semibold">
                  ¡Se ha enviado su información correctamente!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
