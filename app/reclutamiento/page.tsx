"use client";

import Link from "next/link";
import { useState } from "react";
import { Database, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReclutamientoPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("Correo o contraseña incorrectas");
  };

  return (
    <div className="relative min-h-screen bg-[#020817] text-white flex flex-col">
      {/* Fondo decorativo */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      {/* Navbar */}
      <nav className="border-b border-white/10 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Database className="h-6 w-6" />
            <span className="font-bold text-xl">CoreData</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/productos" className="text-sm hover:text-blue-400">
              Productos
            </Link>
            <Link href="/servicios" className="text-sm hover:text-blue-400">
              Servicios
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/assessment">
              <Button className="bg-purple-600 hover:bg-purple-700 transition-colors">
                Assessment
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-blue-500 hover:bg-blue-600 transition-colors">
                Contacto
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <section className="flex items-center justify-center flex-1 pt-32 px-4 relative z-10">
        <div className="w-full max-w-md bg-[#0f172a] rounded-lg shadow-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
            Portal de Reclutamiento
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-600 p-3 bg-[#1e293b] text-white placeholder-gray-400 focus:ring focus:ring-blue-500"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Contraseña
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-600 p-3 bg-[#1e293b] text-white placeholder-gray-400 focus:ring focus:ring-blue-500"
                placeholder="********"
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md"
            >
              Iniciar Sesión
            </Button>
          </form>

          {/* Separador */}
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-gray-400 text-sm">o</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Botón Login con LinkedIn */}
          <Link
            href="/reclutamiento/login-linkedin"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex items-center justify-center gap-3 bg-[#0A66C2] text-white py-2 px-4 rounded hover:bg-[#004182] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.546C0 23.227.79 24 1.77 24h20.46C23.21 24 24 23.227 24 22.273V1.727C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.585a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM20.452 20.452h-3.558v-5.558c0-1.327-.027-3.035-1.85-3.035-1.85 0-2.134 1.446-2.134 2.939v5.654H9.352V9h3.416v1.561h.048c.477-.902 1.637-1.85 3.367-1.85 3.598 0 4.267 2.367 4.267 5.451v6.29z"/>
              </svg>
              Login con LinkedIn
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
