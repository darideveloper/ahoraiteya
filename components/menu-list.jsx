import PropTypes from 'prop-types'
import Link from 'next/link'
import { fontTitle } from '@/libs/fonts'

export default function MenuList({title, menuItems, target}) {
  return (
    <div 
      className={`
        menu-wrapper
        text-center
      `}
    >
      <h3
        className={`
          text-xl
          ${fontTitle.className}
          my-4
        `}
      >
        {title}
      </h3>

      <ul
        className={`
          menu
        `}
      >
        {
          menuItems.map((menuItem, index) => (
            <li
              className={`
                menu-item
              `}
              key={index}
            >
              <Link
                href={menuItem.link}
                className={`
                  p-1
                  flex
                  flex-row
                  items-center
                  justify-center
                  group
                  duration-300
                  hover:opacity-50
                  text-sm
                `}
                target={target}
              >
              {
                menuItem.pathD
                &&
                <svg 
                  viewBox="0 0 24 24"
                  className={`
                    fill-white
                    w-4
                    mr-2
                    duration-300
                    group-hover:scale-125
                  `}
                >
                  <path 
                    d={menuItem.pathD}  
                  />
                </svg>
              }
                {menuItem.text}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

MenuList.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      pathD: PropTypes.string,
    })
  ),
  target: PropTypes.string.isRequired
}