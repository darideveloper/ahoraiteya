import Title from '@/components/title'
import Cta from '@/components/cta'

export default function AboutUs () {

  const infoData = [
    {
      "title": "Hecho en Paraguay",
      "description": "Somos una empresa 100% paraguaya, comprometida con el desarrollo del país."
    },
    {
      "title": "Factura Legal",
      "description": "Todos nuestros servicios cuentan con factura legal."
    },
    {
      "title": "Medios de Pago",
      "description": "Aceptamos pagos en efectivo, transferencia bancaria y tarjetas de crédito."
    },
    {
      "title": "Plataforma Segura",
      "description": "Nuestra plataforma es segura y confiable, tus datos están protegidos."
    },
  ]

  return (
    <section 
      className={`
        about
        container
        mx-auto
        flex
        flex-col-reverse lg:flex-row
        items-center lg:items-center
        justify-center
      `}
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
            grid-cols-1 sm:grid-cols-2
            gap-4
          `}
        >

          {
            infoData.map((item, index) => (
              <div 
                key={index}
                className={`
                  info-card
                  shadow-lg
                  px-8 py-6
                  rounded-lg
                  duration-300
                  hover:shadow-xl
                  hover:bg-orange
                  hover:text-white
                `}
              >
                <h3
                  className={`
                    text-xl
                  `}
                >
                  {item.title}
                </h3>
                <p
                  className={`
                    
                  `}
                >
                  {item.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}