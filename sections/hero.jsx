import CtaIcon from "@/components/cta-icon"
import Counter from "@/components/counter"
import { fontTitle } from '@/libs/fonts'

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
            data-aos="fade-up"
            data-aos-delay="300"
          >
            La mejor <strong>solución</strong> a tus entregas
          </h1>

          <p
            data-aos="fade-down"
            data-aos-delay="600"
          >
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
                  <CtaIcon 
                    key={index}
                    href={link.href}
                    is_phantom={link.is_phantom}
                    text={link.text}
                    delay={index * 300 + 1000}
                  />
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
                  <Counter 
                    key={index}
                    amount={counter.amount}
                    description={counter.description}
                    delay={index * 300 + 1800}
                  />
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