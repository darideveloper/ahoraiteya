import Title from '@/components/title'
import ServiceCard from '@/components/service-card'

export default function Services() {
  
  const servicesData = [
    {
      "title": "Express",
      "description": "Transportamos documentación y paquetería de todo tipo, que no exceda las dimensiones 45x45x45 cms y 25kg de peso.",
    },
    {
      "title": "Gestiones",
      "description": "Servicio complementario al “Express” que ofrece gestionar trámites bancarios, notariales, institucionales, retiro de cheques u otras acciones similares.",
    },
    {
      "title": "Junior",
      "description": "Servicio de mensajería para la entrega de productos, compras, retiro de encomiendas, entre otros.",
    },
    {
      "title": "Delivery",
      "description": "Consiste en el retiro, transporte y distribución de documentos y encomiendas en tiempo planificado y con confirmación de entrega." 
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
          title="Que ofrecemos"
          subtitle="Nuestros servicios"
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
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}