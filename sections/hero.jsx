import Cta from "@/components/cta"
import Arrow from "@/components/arrow"
import { fontTitle } from "@/libs/fonts"

export default function Hero() {
  
  const counters = [
    {
      "amount": "12",
      "description": "Usuarios Registrados"
    },
    {
      "amount": "9",
      "description": "Personas Satisfechas"
    },
    {
      "amount": "200",
      "description": "Envios Realizados"
    },
  ]
  
  const links = [
    {
      "text": "Contáctanos",
      "href": "#contact",
      "is_phantom": false
    },
    {
      "text": "Portal de empresas",
      "href": "https://ahoraiteya.com/business/",
      "is_phantom": true
    }
  ]

  return (

    <section 
      className={`
        hero
        flex
        flex-col md:flex-row
        relative
        py-8 sm:py-16 md:py-24 lg:py-36 xl:py-56
      `}
    >

      <div 
        className={`
          container
          mx-auto
        `}
      >
        <div 
          className={`
            content
            text-center md:text-left
            w-full md:w-2/3 lg:w-1/2
          `}
        >
          <h1
            className={`
              ${fontTitle.className}
              text-5xl md:text-6xl
              my-8
            `}
          >
            La mejor <strong>solución</strong> a tus entregas
          </h1>

          <p>
            Realice sus envios de una forma rápida con unos simples pasos
          </p>

          <div 
            className={`
              btns
              flex
              justify-center md:justify-start
              flex-wrap
              gap-4
              my-8
            `}
          >
            {
              links.map((link, index) => {
                return (
                  <Cta
                    key={index}
                    href={link.href}
                    is_phantom={link.is_phantom}
                  >
                    <div 
                      className={`
                        content
                        flex  
                        items-center
                        justify-center
                      `}
                    >
                      <span
                        className={`
                          mr-2
                        `}
                      >
                        {link.text}
                      </span>
                      <Arrow 
                        className={`
                          ${link.is_phantom ? 'fill-orange' : 'fill-white'}
                          ${link.is_phantom ? 'group-hover:fill-white' : 'group-hover:fill-orange'}
                          w-5
                          h-5
                        `}
                      />
                    </div>
                  </Cta>
                )
              })
            }

          </div>

          <div 
            className={`
              counters
              flex
              justify-center md:justify-start
              items-center
              gap-4 lg:gap-8
            `}
          >
            {
              counters.map((counter, index) => {
                return (
                  <p
                    className={`
                      counter
                      flex
                      flex-col
                      items-center lg:items-start
                      justify-center
                      w-24 lg:w-auto
                    `}
                    key={index}
                  >
                    <span
                      className={`
                        amount
                        ${fontTitle.className}
                        text-3xl md:text-4xl
                        font-bold
                      `}
                    >
                      {counter.amount}
                      <span
                        className={`
                          postfix
                          opacity-60
                        `}
                      >
                        K+
                      </span>
                    </span>

                    <span
                      className={`
                        description
                        leading-4
                      `}
                    >
                      {counter.description}
                    </span>
                  </p>
                )
              })
            }


          </div>

        </div>
      </div>


      <img 
        src="/images/hero.webp"
        alt="Ilustración de repartidos de paquetes en moto"
        className={`
          hero-img
          absolute
          top-0
          right-0
          -z-10
          h-full
          w-auto
          object-cover
          opacity-20 lg:opacity-100
          blur-sm md:blur-none
        `}
      />

      <img 
        src="/images/hero.webp"
        alt="Ilustración de repartidos de paquetes en moto"
        className={`
          hero-img-bg
          absolute
          top-0
          right-32 xl:right-48
          -z-20
          h-full
          w-auto
          opacity-20
          blur-sm
          hidden lg:block
        `}
      />
    
    </section>
  )
}