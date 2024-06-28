import PropTypes from 'prop-types'

export default function Logo ({className}) {
  return (
    <img
      src="/images/logo.png"
      alt="AhoraiteYa Logo"
      className={`
        w-40
        my-6              
      `}
    />
  )
}

Logo.propTypes = {
  className: PropTypes.string
}