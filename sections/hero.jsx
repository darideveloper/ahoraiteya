import CtaIcon from "@/components/cta-icon"
import Counter from "@/components/counter"
import { fontTitle } from '@/libs/fonts'
import { whatsappLinkBase } from "@/libs/contact"
import IconArrow from '@/components/icon-arrow'
import IconWhatsapp from '@/components/icon-whatsapp'

export default function Hero() {
  
  const counters = [
    {
      "amount": "12",
      "unit": "K",
      "description": "Usuarios Registrados"
    },
    {
      "amount": "9",
      "unit": "K",
      "description": "Personas Satisfechas"
    },
    {
      "amount": "1",
      "unit": "M",
      "description": "Envios Realizados"
    },
  ]
  
  const links = [
    {
      "text": "Whatsapp",
      "href": `${whatsappLinkBase}Hola, me gustaría saber más sobre sus servicios`,
      "is_phantom": false,
      "target": "_blank",
      "icon": <IconWhatsapp className={`w-5 h-5 fill-white mx-2 group-hover:fill-orange`}/>
    },
    {
      "text": "Contáctanos",
      "href": "#contact",
      "is_phantom": true,
      "target": "_self",
      "icon": <IconArrow className={`w-5 h-5 fill-black mx-2 group-hover:fill-white`} />
    },
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
              font-bold
            `}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            ACERCA DE
            <span
              className={`
                text-orange
                block
              `}
            >
              AHORAITEYA
            </span>
          </h1>

          <p
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Con más de 1 millón de envíos realizados, "AhoraiteYA" utiliza tecnología avanzada para proporcionar soluciones logísticas precisas y adaptadas a las necesidades del mercado empresarial. Nuestra plataforma propia simplifica la gestión de logística, haciendo cada operación más eficiente y menos susceptible a errores.
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
                    icon={link.icon}
                    target={link.target}
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
                    unit={counter.unit}
                    delay={index * 300}
                  />
                )
              })
            }


          </div>

        </div>
      </div>


      <img 
        src="/web/images/hero.webp"
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
        src="/web/images/hero.webp"
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