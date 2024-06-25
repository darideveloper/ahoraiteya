import PropTypes from 'prop-types'
import { fontTitle } from '@/libs/fonts'

export default function Counter({amount, description}) {
  return (
    <p
      className={`
        counter
        flex
        flex-col
        items-center lg:items-start
        justify-center
        w-24 lg:w-auto
      `}
    >
      <span
        className={`
          amount
          ${fontTitle.className}
          text-3xl md:text-4xl
          font-bold
        `}
      >
        {amount}
        <span
          className={`
            postfix
            opacity-60
          `}
        >
          K+
        </span>
      </span>

      <span
        className={`
          description
          leading-4
        `}
      >
        {description}
      </span>
    </p>
  )
}

Counter.propTypes = {
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}