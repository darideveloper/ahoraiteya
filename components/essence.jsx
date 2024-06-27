import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'


export default function Essence({title, details, src, index, currentEssence}) {

  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsVisible(index === currentEssence)

      setTimeout(() => {
        setIsLoading(false)
      }, 100)
    }, 500)
        
  }, [currentEssence])
  
  return (
    <div 
      className={`
        esscence
        duration-300
        ${isLoading ? 'opacity-0' : 'opacity-100'}
        ${isVisible ? 'block' : 'hidden'}
      `}
    >
     <div 
        className={`
          img-wrapper
          bg-purple
          rounded-full
          w-40 h-40
          p-6
          mx-auto
        `}
      >
        <img 
          src={src}
          alt={`Imagen de ${title}`}
          className={`
            w-10/12
            mx-auto
            mt-4
          `}
        />
      </div>
      <p
        className={`
          text-center
          font-bold
          inline-block
          mt-6
        `}
      >
        {details}
      </p>
     
    </div>
  )
}

Essence.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentEssence: PropTypes.number.isRequired,
}