import PropTypes from 'prop-types'

export default function Icon({src, alt, className, small=false}) {

  return (
    <div 
      className={`
        icon
        bg-orange-light group-hover:bg-orange
        inline-block
        rounded-xl
        duration-300
        ${className}
      `}
    >
      <img 
        src={src}
        alt={alt}
        className={`
          mx-auto
          ${small ? 'w-12' : 'w-20'}
          ${small ? 'p-2' : 'p-4'}
        `}
      />
    </div>
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  small: PropTypes.bool
}