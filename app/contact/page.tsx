import Link from "next/link";
import Script from "next/script";
import { Database, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white relative">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
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
            <Link
              href="/nosotros"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Nosotros
            </Link>
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

      {/* Calendly Section */}
      <section className="py-40 w-full relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 mt-20">Agenda una Reunión</h2>
          <div
            className="calendly-inline-widget mx-auto w-full max-w-4xl rounded-lg shadow-lg"
            data-url="https://calendly.com/seba-burella/30min"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </section>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
