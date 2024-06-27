import PropTypes from 'prop-types'
import Cta from "@/components/cta"

export default function CtaIcon({href, is_phantom, text, icon, target='_self', delay = 0}) {
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
          {icon}
        </div>
      </Cta>
  )
}

CtaIcon.propTypes = {
  href: PropTypes.string,
  is_phantom: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.node,
  target: PropTypes.string,
  delay: PropTypes.number
}