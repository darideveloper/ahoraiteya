import Icon from '@/components/icon'
import { fontTitle } from '@/libs/fonts'

export default function ServiceCard({title, description}) {
  return (
    <article
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
        group
        relative
      `}
    >

      <Icon 
        src={`/images/services/${title.toLowerCase()}.webp`}
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
    </article>
  )
}