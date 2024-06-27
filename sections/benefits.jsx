import Title from '@/components/title'
import BenefitCard from '@/components/benefit-card'

export default function Benefits() {
  
  const benefitsData = [
    {
      "title": "INTEGRACIÓN TECNOLÓGICA AVANZADA",
      "description": "Optimización de rutas en tiempo real usando IA y machine learning.",
    },
    {
      "title": "GESTIÓN LOGÍSTICA PERSONALIZADA",
      "description": "Soluciones completamente personalizadas para cada necesidad empresarial.",
    },
    {
      "title": "COMPROMISO CON LA SOSTENIBILIDAD",
      "description": "Prácticas ecológicas y vehículos sostenibles en nuestra flota.",
    },
    {
      "title": "SEGURIDAD Y CONFIANZA",
      "description": "Procesos de cifrado avanzados y monitoreo en tiempo real para cada entrega." 
    },
    {
      "title": "FLEXIBILIDAD OPERATIVA",
      "description": "Capacidad para manejar solicitudes de último momento y cambios en tiempo real." 
    },
    {
      "title": "EXPERIENCIA Y FIABILIDAD",
      "description": "Más de 1 millón de envíos realizados, garantizando un servicio de alta calidad y confiable." 
    }

  ]

  return (
    <section 
      className={`
        services
        container
        mx-auto
        text-center md:text-left
      `}
    >

      <div 
        className={`
          header
          flex
          flex-col md:flex-row
          items-center
          justify-between
        `}
      >
        <Title
          title="Qué ofrecemos"
          subtitle="Beneficios clave para el sector empresarial"
          className={`
            w-full md:w-1/2 lg:w-1/3
          `}
        />

        <p 
          className={`
            slogan
            md:mt-12
            w-full md:w-1/2 lg:w-2/3
          `}
        >
          Comprometidos con la calidad y la eficiencia, ofrecemos una amplia gama de 
          servicios de mensajería y paquetería para satisfacer tus necesidades.
        </p>
      </div>

      
      <div 
        className={`
          cards
          grid
          grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
          gap-8
          w-11/12 sm:w-full
          mx-auto
          mt-8
        `}
      >
        {benefitsData.map((service, index) => (
          <BenefitCard 
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}