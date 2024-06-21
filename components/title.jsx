import PropTypes from 'prop-types'

export default function Title({title, subtitle, className}){
  return (
    <h2
      className={`
        ${className}
        text-center md:text-left
        mt-20
        mb-6
      `}
    >
      <span
        className={`
          small-text
          text-sm
          uppercase
          text-center
          spaced
          text-purple
          font-bold
        `}
      >
        {title}
      </span>
      <span
        className={`
          large-text
          text-4xl
          block
        `}
      >
        {subtitle}
      </span>
    </h2>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string
}