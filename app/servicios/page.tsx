"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  Database,
  Globe,
  Search,
  Linkedin,
  Twitter,
  PhoneIcon as WhatsApp,
  Play,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/image-carousel";
import { VideoGallery } from "@/components/video-gallery";

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-6xl font-bold text-white">Servicios de <span className="text-blue-400">Data Governance</span></h1>
          <p className="mt-6 text-2xl text-gray-300 max-w-4xl mx-auto">
            La gobernanza de datos es fundamental para garantizar la calidad, seguridad y disponibilidad de la información en toda la organización. 
            Ofrecemos estrategias personalizadas para la implementación de frameworks de Data Governance en tu empresa.
          </p>
        </div>
      </section>

      {/* Data Governance Schema Section */}
      <section className="py-32 relative bg-black">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-white">Esquema de Data Governance</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500 w-full md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">Políticas y Normativas</h3>
              <p className="text-gray-300 text-lg">
                Definimos lineamientos que aseguren la calidad y cumplimiento normativo de los datos.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500 w-full md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">Gestión de Calidad de Datos</h3>
              <p className="text-gray-300 text-lg">
                Evaluamos la exactitud, consistencia e integridad de los datos para su uso óptimo en los procesos de negocio.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500 w-full md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">Seguridad de Datos</h3>
              <p className="text-gray-300 text-lg">
                Implementamos controles de acceso y encriptación para proteger la confidencialidad y privacidad de la información.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-blue-500 w-full md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">Monitoreo y Auditoría</h3>
              <p className="text-gray-300 text-lg">
                Desarrollamos métricas e informes para asegurar el cumplimiento de las políticas de gobernanza de datos.
              </p>
            </div>
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
