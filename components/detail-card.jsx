import PropTypes from 'prop-types'
import Icon from '@/components/icon'
import { fontTitle } from '@/libs/fonts'


export default function DetailCard({title, description, onClick, step, currentStep}) {

  const isOpen = currentStep === step

  return (
    <article 
      className={`
        details-card 
        flex
        items-center
        justify-start
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
      <Icon 
        src="/images/icon-delivery.svg"
        alt="Icono de delivery"
        small={true}
        className={`
          ${isOpen && '!bg-orange'}
        `}
      />
      <div 
        className={`
          texts
          text-left
          ml-4
        `}
      >
        <h3
          className={`
            font-bold
            text-xl
            ${isOpen ? 'top-10' : 'top-1/2'}
            ${isOpen && 'text-white'}
            ${fontTitle.className}
          `}
        >
          {title}
        </h3>

        <p
          className={`
            duration-300
            ${isOpen ? 'h-6' : 'h-0'}
            ${isOpen ? 'opacity-100' : 'opacity-0'}
            ${isOpen && 'text-white'}
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
          w-4
          duration-300
          fill-orange-light
          ${!isOpen && 'group-hover:fill-orange'}
          ${isOpen && 'opacity-0'}
          absolute
          right-4
          top-1/2
          -translate-y-1/2
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
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  step: PropTypes.number,
  currentStep: PropTypes.number
}