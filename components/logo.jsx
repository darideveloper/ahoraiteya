import PropTypes from 'prop-types'

export default function Logo ({className}) {
  return (
    <img
      src="/web/images/logo.png"
      alt="AhoraiteYa Logo"
      className={`
        w-40
        my-6
        ${className}
      `}
    />
  )
}

Logo.propTypes = {
  className: PropTypes.string
}