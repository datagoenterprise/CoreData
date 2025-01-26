"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  Database,
  Globe,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Calendly: any;
  }
}


export default function HomePage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/seba-burella/30min",
        text: "Agenda una reunión",
        color: "#0069ff",
        textColor: "#ffffff",
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Database className="h-6 w-6" />
            <span className="font-bold text-xl">CoreData</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/nosotros" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Nosotros
            </Link>
            <Link href="/productos" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Productos
            </Link>
            <Link href="/servicios" className="text-sm font-medium hover:text-blue-400 transition-colors">
              Servicios
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/assessment">
              <Button className="bg-purple-600 hover:bg-purple-700 transition-colors">
                Assessment
              </Button>
            </Link>
            <Link href="/portal-clientes">
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors">
                Portal Clientes
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-blue-500 hover:bg-blue-600 transition-colors">
                Contacto
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="hover:bg-white/10 transition-colors">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10 transition-colors">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Products Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-10">
            Nuestros <span className="text-blue-400">Productos</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Creación Dashboard Básico",
                price: "$800 USD",
                description:
                  "Creación de un tablero en Power BI o Looker Studio con 2 medidas definidas por el usuario, una pestaña y 4 horas de soporte post desarrollo para solución de bugs.",
              },
              {
                title: "Creación Dashboard Plan Medio",
                price: "$1350 USD",
                description:
                  "Creación de un tablero en Power BI o Looker Studio con 5 medidas definidas por el usuario, dos pestañas y 20 horas de soporte post desarrollo para solución de bugs.",
              },
              {
                title: "Creación Dashboard Plan Superior",
                price: "$1800 USD",
                description:
                  "Creación de un tablero en Power BI o Looker Studio con 10 medidas definidas por el usuario, cuatro pestañas y 40 horas de soporte post desarrollo o transferencia de conocimiento.",
              },
            ].map((product, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-2xl text-blue-400 font-bold mb-4">{product.price}</p>
                  <p className="text-gray-300 text-lg mb-6">{product.description}</p>
                </div>
                <a 
                  href="https://paypal.me/sebabure?country.x=AR&locale.x=es_XC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 transition-colors w-full">
                    Comprar ahora
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 mt-10">
        <div className="container mx-auto text-center text-white text-lg">
          <p>
            © 2025 CORE DATA S.A. Todos los derechos reservados. |{" "}
            <Link href="/privacy-policy" className="text-blue-400 hover:underline">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
