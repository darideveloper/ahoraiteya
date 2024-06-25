import PropTypes from 'prop-types'

export default function AppImage({src, step, currentStep}) {
  return (
    <img 
      src={src}
      alt={`app step ${step + 1}`}
      className={`
        ${currentStep === step ? 'opacity-100' : 'opacity-0'}
        ${step != 0 && 'absolute'}
        top-0
        left-0
        w-full
      `}
    />
  )
}

AppImage.propTypes = {
  src: PropTypes.string,
  step: PropTypes.number,
  currentStep: PropTypes.number,
}