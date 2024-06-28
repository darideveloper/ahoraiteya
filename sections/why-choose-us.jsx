import Title from '@/components/title'
import Cta from '@/components/cta'
import InfoCard from '@/components/info-card'

export default function WhyChooseUs() {
  
  const infoData = [
    {
      "title": "Capacidades Tecnológicas",
      "description": "Nuestro enfoque en la innovación tecnológica nos ha permitido desarrollar una plataforma completa que maneja todos los aspectos del proceso de delivery, desde la gestión de pedidos hasta la entrega final. Esta plataforma no solo facilita una operación sin errores y eficiente, sino que también ofrece capacidades avanzadas de reporte y análisis para adaptarse a las necesidades específicas de cada cliente."
    },
    {
      "title": "Soporte Excepcional B2B",
      "description": 'En "AhoraiteYA", entendemos la importancia del soporte continuo para las operaciones empresariales. Ofrecemos un nivel de soporte inmediato a través de una designación exclusiva de nuestros operadores para el propósito a través múltiples canales, correo electrónico, WhatsApp y llamadas telefónicas, asegurando que todas sus consultas y necesidades sean atendidas rápidamente y con la mayor eficacia.'
    },
    {
      "title": "Conductores y Personal Altamente Capacitados",
      "description": 'En "AhoraiteYA", no solo equipamos a nuestros conductores con las mejores herramientas tecnológicas, sino que también invertimos significativamente en su formación. Todos nuestros conductores y personal de soporte reciben entrenamiento exhaustivo sobre las últimas tecnologías y mejores prácticas en logística, garantizando un servicio de máxima calidad y fiabilidad.'
    },
  ]

  return (
    <section 
      className={`
        why-choose-us
        container
        mx-auto
        flex
        flex-col-reverse lg:flex-row
        items-center lg:items-center
        justify-center
      `}
      id="why-choose-us"
    >

      <div 
        className={`
          img-wrapper
          w-11/12 lg:w-1/3
          max-w-lg
          mx-auto
          my-8
          bg-transparent 
        `}
      >
        <img 
          src="/images/about.webp"
          alt="Ilustración de una persona entregando un paquete en una moto"
          className={`
          `}
        />
      </div>


      <div 
        className={`
          content
          flex
          flex-col
          items-center lg:items-start
          justify-center
          w-full lg:w-2/3
        `}
      >
        <Title 
          title="AhoraiteYA"
          subtitle="¿Por qué elegirnos?"
          className={`
            lg:ml-8  
          `}
        />

        <p
          className={`
            text-center lg:text-left
            w-10/12
            lg:ml-8  
          `}
        >
          Somos líderes en el mercado de delivery en Paraguay.
          Nuestro objetivo es brindar un servicio de calidad, rápido y seguro.
        </p>

        <Cta 
          href='#contact'
          className={`
            mx-auto lg:ml-8
            inline-block
            my-4
          `}
        >
          Contáctanos        
        </Cta>

        <div 
          className={`
            info-cards
            w-11/12
            mx-auto
            grid
            grid-cols-1 xl:grid-cols-3
            gap-4
          `}
        >

          {
            infoData.map((item, index) => (
              <InfoCard 
                key={index}
                title={item.title}
                description={item.description}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}