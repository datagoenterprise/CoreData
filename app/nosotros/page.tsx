import Link from "next/link";
import { Database, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white relative">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M54 51v-6h-3v6h-6v3h6v6h3v-6h6v-3h-6zm0-45V0h-3v6h-6v3h6v6h3V9h6V6h-6zM9 51v-6H6v6H0v3h6v6h3v-6h6v-3H9zM9 6V0H6v6H0v3h6v6h3V9h6V6H9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
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
          <h1 className="text-6xl font-bold text-white">Sobre <span className="text-blue-400">Nosotros</span></h1>
          <p className="mt-6 text-2xl text-gray-300">
            Nuestra versatilidad tecnológica nos permite generar productos adaptables al futuro y a cualquier realidad empresarial.
          </p>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020817] to-[#020817] opacity-90"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-white">Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "QORA", industry: "Minería" },
              { name: "Elea", industry: "Farmacéutica" },
              { name: "Xtrim", industry: "Telecomunicaciones" },
              { name: "Banisi", industry: "Banco" },
              { name: "Avanzu", industry: "Formaciones" },
              { name: "Vuela", industry: "Túneles de Viento" },
            ].map((client, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-white">{client.name}</h3>
                <p className="text-gray-400 text-lg">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
      <section className="py-32 relative">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#020817] to-black opacity-100"
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-white">Reconocimientos</h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img 
              src="/people_choice_awards.svg" 
              alt="People Choice Awards" 
              className="w-40 h-40 object-contain"
            />
            <img 
              src="/hitachi_awards.svg" 
              alt="Hitachi Awards" 
              className="w-40 h-40 object-contain"
            />
            <img 
              src="/aws-partner-2022-awards.svg" 
              alt="AWS Partner 2022" 
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
      </section>


      {/* Parte Final */}
      <footer className="bg-black py-8 mt-0 relative z-10">
        <div className="container mx-auto text-center text-white text-lg font-bold">
          <p className="text-white text-opacity-100">
            © 2025 CORE DATA S.A. Todos los derechos reservados. |{" "}
            <Link href="/privacy-policy" className="text-white hover:underline">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
