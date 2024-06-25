import PropTypes from 'prop-types'
import Cta from "@/components/cta"
import { fontTitle } from "@/libs/fonts"

export default function PromoCard({title, text, list, cta, pathD}) {
  return (
    <article
      className={`
        join-us-card
        border-2
        border-purple
        rounded-xl
        w-11/12
        max-w-xl
        mx-auto md:mx-0
        px-4
        py-8
        flex
        flex-col md:flex-row
        items-center
        justify-center
        group
        duration-300
        hover:bg-purple
        hover:text-white
      `}
    >
      <div 
        className={`
          icon-title
          flex
          flex-col
          items-center
          justify-center
          w-full
        `}
      >
        <div 
          className={`
            icon-wrapper
            p-8
            duration-300
            bg-purple group-hover:bg-white
            rounded-full
            inline-block
            mx-auto
          `}>
          <svg
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 24 24"
            className={`
              duration-300
              fill-white group-hover:fill-purple
              w-20
              h-20
            `}
          >
            <path 
              d={pathD}
            />
          </svg>
        </div>

        <h3
          className={`
            ${fontTitle.className}
            text-2xl
            font-bold
            text-center
            mt-4
          `}
        >
          {title}
        </h3>

        <p
          className={`
          `}
        >
          {text}
        </p>
      </div>

      <div 
        className={`
          details
          flex
          flex-col
          items-center md:items-start
          justify-center
          w-full
        `}
      >
        <ul
          className={`
            text-left
            my-4
            w-11/12
            mx-auto
          `}
        >
          {
            list.map((listItem, index) => (
              <li 
                key={index}
                className={`
                  flex
                  items-start
                  justify-start sm:justify-center md:justify-start
                  gap-2
                  mt-2
                `}
              >
                <svg 
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  className={`
                    w-5
                    h-5
                    duration-300
                    fill-purple group-hover:fill-white
                  `}
                >
                  <path 
                    d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
                    fillRule="nonzero"  
                  />  
                </svg>

                <span
                  className={`
                    w-11/12 sm:w-auto
                    inline-block
                  `}
                >
                  {listItem}
                </span>
              </li>
            ))
          }
        </ul>
        <Cta
          href="#"
          className={`
            group-hover:scale-110
            md:group-hover:translate-x-6
          `}
        >
          {cta}
        </Cta>
      </div>
    </article>
  )
}

PromoCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  list: PropTypes.array,
  cta: PropTypes.string,
  pathD: PropTypes.string
}