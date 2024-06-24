import Link from 'next/link'
import Title from '@/components/title'
import Arrow from '@/components/arrow'
import Icon from '@/components/icon'
import { whatsappLinkBase } from '@/libs/contact'
import { fontTitle } from '@/libs/fonts'

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
        my-20
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
          <Link 
            key={index}
            href={`${whatsappLinkBase} Me interesa su servicio de ${service.title}, te contacto desde tu web ahoraiteya.com`}
            target="_blank"
            className={`
              card
              rounded-lg
              border-2
              border-grey
              shadow-sm hover:shadow-lg
              block
              duration-300
              hover:scale-105
              px-10 
              py-14
              pb-20
              group
              relative
            `}
          >
            <article>

              <Icon 
                src={`/images/icon-${service.title.toLowerCase()}.svg`}
                alt={`Icono de servicio ${service.title}`}
                className={`
                  mb-4
                `}
              />
              
              <h3
                className={`
                  text-2xl
                  font-bold
                  my-4
                  ${fontTitle.className}
                `}
              >
                {service.title}
              </h3>
              <p
                className={`
                  text-justify
                `}
              >
                {service.description}
              </p>

              <Arrow
                className={`
                  fill-orange
                  w-10
                  h-10
                  absolute
                  bottom-5
                  left-5
                  duration-300
                  rounded-full
                  group-hover:bg-orange
                  group-hover:fill-white
                  p-2
                `}
              />
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}