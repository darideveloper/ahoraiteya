import PropTypes from 'prop-types'
import { fontTitle } from '@/libs/fonts'

export default function InfoCard({title, description, delay = 0}) {
  return (
    <div 
        className={`
          info-card
          shadow-lg
          px-8 py-6
          rounded-lg
          duration-300
          hover:shadow-xl
          group
          hover:bg-orange
          hover:text-white
        `}
        data-aos="zoom-in-left"
        data-aos-delay={delay}
      >

        <div
          className={`
            title
            flex-col sm:flex xl:flex-col
            items-center
            justify-start
          `}
        >
          <div 
            className={`
              img-wrapper
              p-1
              rounded-full
              w-16
              h-16
              flex
              items-center
              justify-center
              bg-white
              m-2
            `}
          >
            <img 
              src={`/images/about-us/${title.toLowerCase()}.webp`}
              className={`
                px-2
                w-full
              `}
            />
          </div>
          <h3
            className={`
              text-xl
              ${fontTitle.className}
              my-4
              block
            `}
          >
            {title}
          </h3>
        </div>
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
  description: PropTypes.string.isRequired,
  delay: PropTypes.number
}
