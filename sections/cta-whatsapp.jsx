import Link from "next/link"
import IconWhatsapp from "@/components/icon-whatsapp"
import { whatsappLinkBase } from "@/libs/contact"

export default function CtaWhatsapp() {
  return (
    <Link 
      href={`${whatsappLinkBase}Hola, te contacto desde tu web. Estoy interesado en tus servicios`}
      className={`
        cta-whatsapp
        fixed
        bottom-4
        right-4
        bg-orange hover:bg-purple
        p-3 md:p-4
        rounded-full
        flex
        items-center
        justify-center
        group
        duration-300
        shadow-xl hover:shadow-2xl
        hover:scale-105
        z-10
        
      `}
    >
      <IconWhatsapp 
        className={`
          w-6 md:w-8
          h-6 md:h-8
          fill-white
        `}
      />
    </Link>
  )
}