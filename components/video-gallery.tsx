'use client'

import { useEffect, useState } from 'react'

const dashboardVideos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-cxxYgaHptL8BlMDazJqrVjUlfQTDO3.mp4",
    title: "Dashboard Interactivo 1"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%20(1)%20drible6_zoomy-gAazT96qukqtOLwyrKS7CgOvAQ7pKE.mp4",
    title: "Dashboard Interactivo 2"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-884ae2b010f25b6a0d858fa1156ab2db-gJW08SzQvRmtWCiTV9R78WodAHqGdO.mp4",
    title: "Dashboard Interactivo 3"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-feac52a42f7e4a55c47c448f9b6453b7-A32ch1zhfmoQsUwL4D6uOWnvCIGGF4.mp4",
    title: "Dashboard Interactivo 4"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fashion%20Hub_dribbble_BP_Usage%20_%20Subscription-nUwvngtKoHM006UCefnUDaNnu8PVN9.mp4",
    title: "Dashboard Interactivo 5"
  }
]

export function VideoGallery() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dashboardVideos.map((video, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
          style={{
            height: '275px',
            width: '100%',
            maxWidth: '400px', // Ancho máximo
            margin: 'auto', // Centrado
            borderRadius: '16px', // Bordes redondeados
          }}
        >
          {/* Video */}
          <video
            src={video.src}
            className="w-full h-full object-cover"
            style={{
              borderRadius: '16px', // Mantiene bordes redondeados
              height: '100%', // Altura fija constante
            }}
            loop
            muted
            playsInline
            preload="auto"
            onMouseEnter={(e) => {
              e.currentTarget.play().catch(() => {})
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause()
              e.currentTarget.currentTime = 0
            }}
          />

          {/* Título del video */}
          <div className="absolute bottom-2 left-2 bg-black/70 text-white py-1 px-3 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {video.title}
          </div>
        </div>
      ))}
    </div>
  )
}
