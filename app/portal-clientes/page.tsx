"use client";

import Link from "next/link";
import { useState } from "react";
import { Database, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Calendly: any;
  }
}


export default function PortalClientesPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("Correo o contraseña incorrectas");
  };

  return (
    <div className="relative min-h-screen bg-[#020817] text-white flex flex-col">
      {/* Fondo con gradiente */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Database className="h-6 w-6" />
            <span className="font-bold text-xl">CoreData</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/productos"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
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
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/10 transition-colors"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/10 transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <section className="flex items-center justify-center flex-1 pt-32 px-4 relative z-10">
        <div className="w-full max-w-md bg-[#0f172a] rounded-lg shadow-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
            Iniciar Sesión
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-600 p-3 shadow-sm bg-[#1e293b] text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-600 p-3 shadow-sm bg-[#1e293b] text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="********"
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-300"
                >
                  Recordarme
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md"
            >
              Iniciar Sesión
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
