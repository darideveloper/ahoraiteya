import Link from 'next/link'
import Arrow from '@/components/arrow'
import Icon from '@/components/icon'
import { whatsappLinkBase } from '@/libs/contact'
import { fontTitle } from '@/libs/fonts'

export default function ServiceCard({title, description}) {
  return (
    <Link 
      href={`${whatsappLinkBase} Me interesa su servicio de ${title}, te contacto desde tu web ahoraiteya.com`}
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
          src={`/images/icon-${title.toLowerCase()}.svg`}
          alt={`Icono de servicio ${title}`}
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
          {title}
        </h3>
        <p
          className={`
            text-justify
          `}
        >
          {description}
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
  )
}