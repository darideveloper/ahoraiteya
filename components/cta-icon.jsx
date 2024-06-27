import PropTypes from 'prop-types'
import Cta from "@/components/cta"
import Arrow from "@/components/arrow"

export default function CtaIcon({href, is_phantom, text, target='_self', delay = 0}) {
  return (
    <Cta
        href={href}
        is_phantom={is_phantom}
        delay={delay}
        target={target}
      >
        <div 
          className={`
            content
            flex  
            items-center
            justify-center
          `}
        >
          <span
            className={`
              mr-2
            `}
          >
            {text}
          </span>
          <Arrow 
            className={`
              ${is_phantom ? 'fill-orange' : 'fill-white'}
              ${is_phantom ? 'group-hover:fill-white' : 'group-hover:fill-orange'}
              w-5
              h-5
            `}
          />
        </div>
      </Cta>
  )
}

CtaIcon.propTypes = {
  href: PropTypes.string,
  is_phantom: PropTypes.bool,
  text: PropTypes.string,
  target: PropTypes.string,
  delay: PropTypes.number
}