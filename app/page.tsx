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
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Apasionados por los datos y la{" "}
              <span className="text-blue-400">analítica</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Entendemos a profundidad los desafíos de datos que enfrentan las empresas{" "}
              <span className="font-semibold">DE LA REGIÓN</span>, desde un punto de vista agnóstico y estratégico.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#020817]">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { number: "+8", label: "Años de experiencia" },
              { number: "+150", label: "Implementaciones empresariales" },
              { number: "7", label: "Países en LATAM" },
              { number: "+8", label: "Partners internacionales" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-64 h-64 bg-blue-500 rounded-full shadow-2xl border-8 border-blue-300 transform transition-transform hover:scale-105"
              >
                <p className="text-6xl font-bold text-white">{stat.number}</p>
                <p className="text-xl text-white text-center mt-4">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-20">
            <ImageCarousel />
          </div>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Experiencia Interactiva
            </h3>
            <VideoGallery />
          </div>
        </div>
      </section>
    </div>
  );
}