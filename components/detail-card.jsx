import PropTypes from 'prop-types'
import { fontTitle } from '@/libs/fonts'


export default function DetailCard({title, description, onClick, index, currentEssence}) {

  const isOpen = currentEssence === index

  return (
    <article 
      className={`
        details-card 
        flex
        items-center
        justify-between
        shadow-lg
        rounded-xl
        group
        cursor-pointer
        w-11/12
        mx-auto
        px-4
        py-2
        duration-300
        relative
        overflow-hidden
        ${isOpen && 'bg-orange'}
        hover:scale-105
      `}
      onClick={onClick}
    >
      <div 
        className={`
          texts
          text-left
          ml-4
          w-10/12
        `}
      >
        <h3
          className={`
            font-bold
            text-xl
            duration-300
            w-full
            ${fontTitle.className}
            ${isOpen && 'text-white'}
            ${isOpen && 'ml-4'}
          `}
        >
          {title}
        </h3>

        <p
          // text hidden, only visible for seo
          className={`
            hidden
          `}
        >
          {description}
        </p>

      </div>
      
      <svg 
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`
          arrow
          w-10
          p-1
          duration-300
          fill-orange-light
          ${!isOpen && 'group-hover:fill-orange'}
          ${isOpen && 'opacity-0'}
          -rotate-90
        `}
      >
        <path 
          d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"  
        />
      </svg>

    </article>
  )
}

DetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number,
  currentEssence: PropTypes.number,
}