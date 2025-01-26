'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const dashboardImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6c49ed9bfe6b8a744e5dc93210703df9.jpg-u0PtNzFY1xijJuTndMPQXyh8jlHanI.jpeg",
    alt: "Dashboard financiero con métricas de transacciones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4441c2fade98bfc8ae9bd5efaf801078.jpg-buIbP72n781udpSKgdEhNxFgVS7wIE.jpeg",
    alt: "Dashboard de análisis de negocio",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce07d8711a66cf8106a0e6ca2033c719.jpg-qAyr2xeqfjTeZLVNSrvvGej3CAYyb5.jpeg",
    alt: "Dashboard de métricas y mediciones",
  },
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Cambio automático de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dashboardImages.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval) // Limpia el intervalo al desmontar
  }, [])

  // Función para ir a la imagen anterior
  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dashboardImages.length) % dashboardImages.length)
  }

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dashboardImages.length)
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Imagen actual */}
      <div className="relative w-full h-[600px] sm:h-[720px]">
        <Image
          src={dashboardImages[currentIndex].src || "/placeholder.svg"}
          alt={dashboardImages[currentIndex].alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={previousImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-800/75 text-white p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-800/75 text-white p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {dashboardImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
