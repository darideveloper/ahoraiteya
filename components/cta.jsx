import Link from 'next/link'
import PropTypes from 'prop-types'

export default function Cta ({children, href, className, is_phantom = false, is_rounded = false}){
  
  console.log('cta', href, className, is_phantom, is_rounded)

  return (
    <Link
      href={href}
      className={`
        group
        cta
        ${is_phantom
          ?
          `
            bg-white
            boder-white
            hover:bg-purple
            hover:text-white
          `
          :
          `
            bg-orange hover:bg-white
            text-white
            hover:text-orange
            border-2
            border-orange
          `
        }
        px-4
        py-2
        text-xl md:text-2xl
        duration-300
        hover:scale-105
        ${className}
      `}
    >
      {children}
    </Link>
  )
}

Cta.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  is_phantom: PropTypes.bool,
  is_rounded: PropTypes.bool
}