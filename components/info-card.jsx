import PropTypes from 'prop-types'
import { fontTitle } from '@/libs/fonts'

export default function InfoCard({title, description}) {
  return (
    <div 
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
            ${fontTitle.className}
          `}
        >
          {title}
        </h3>
        <p
          className={`
            
          `}
        >
          {description}
        </p>
      </div>
  )
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
