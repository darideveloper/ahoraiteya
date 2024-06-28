import Logo from '@/components/logo'
import Link from 'next/link'
import { headerMenuItems } from '@/libs/menus'
import { fontTitle } from '@/libs/fonts'
import { useState } from 'react'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={`
        header
        bg-transparent
        w-full
        container
        mx-auto
        flex
        items-center
        justify-between
      `}
    >
      <Logo />

      <button
        className={`
          menu-btn
          bg-orange
          p-3
          rounded-xl
          lg:hidden
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          viewBox="0 0 24 24"
          className={`
            fill-white
            w-5
            h-5
          `}
        >
          <path 
            d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
            className={`
              
            `}
          />  
        </svg>
      </button>

      

      <nav
        className={`
          fixed lg:static
          top-0
          ${isOpen ? 'left-0' : '-left-96'}
          w-72 lg:w-auto
          h-screen lg:h-auto
          bg-orange lg:bg-transparent
          z-10
          flex
          items-start
          justify-center
          duration-700
        `}
      >
        <ul
          className={`
            ${fontTitle.className}
            mt-16 lg:mt-0
            flex
            flex-col lg:flex-row
          `}
        >
          {
            headerMenuItems.map((item, index) => (
              <li 
                key={index}
              >
                <Link
                  href={item.link}
                  className={`
                    text-md
                    uppercase
                    text-center
                    block
                    py-6
                    px-2
                    lg:mx-2
                    text-white lg:text-black
                    duration-300
                    hover:opacity-50
                    lg:hover:text-orange
                  `}
                  target={item.target}
                >
                  {item.text}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

    </header>
  )
}