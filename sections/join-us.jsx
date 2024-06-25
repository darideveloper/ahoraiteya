import Title from "@/components/title"
import Cta from "@/components/cta"
import { fontTitle } from "@/libs/fonts"

export default function JoinUs() {

  const joinData = [
    {
      "title": "Sé conductor",
      "text": "Sé tu jefe y maneja cuando quieras",
      "list": [
        "Gana manejando con AhoraiteYA!",
        "Maneja cuando quieras!",
        "Súmate a nuestra familia!"
      ],
      "cta": "Únete",
      "pathD": 'M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z'
    },
    {
      "title": "Registrate gratis",
      "text": "Nos encantaría trabajar contigo",
      "list": [
        "Gestiona tus entregas!",
        "Nuestro equipo te hace el delivery!",
        "Todo con factura legal!"
      ],
      "cta": "Registrate",
      "pathD": 'M18.5 12c-3.036 0-5.5 2.463-5.5 5.5s2.464 5.5 5.5 5.5c3.035 0 5.5-2.463 5.5-5.5s-2.465-5.5-5.5-5.5zm-6.634 9h-11.866v-20h22v9.866c-.62-.328-1.292-.572-2-.716v-7.15h-7v6h-4v-6h-7v16h9.15c.144.708.388 1.38.716 2zm6.019-2.94l-1.259-1.182-.962.989 2.24 2.133 3.765-3.834-.979-.97-2.805 2.864zm-8.885-1.06h-5v-2h5v2z'
    },
  ]

  return (
    <section
      className={`
        join-us
        container
        mx-auto
      `}
    >
      <Title
        title="ünete a nosotros"
        subtitle="¿Quieres colaborar con nosotros? ¡Únete a nuestro equipo!"
      />

      
      <div 
        className={`
          join-us-cards
          flex
          flex-wrap
          items-center
          justify-center
          gap-8
        `}
      >
        {
          joinData.map((item, index) => (
            <article
              key={index}
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
                    clip-rule="evenodd"
                    viewBox="0 0 24 24"
                    className={`
                      duration-300
                      fill-white group-hover:fill-purple
                      w-20
                      h-20
                    `}
                  >
                    <path 
                      d={item.pathD}
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
                  {item.title}
                </h3>

                <p
                  className={`
                  `}
                >
                  {item.text}
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
                    item.list.map((listItem, index) => (
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
                  {item.cta}
                </Cta>
              </div>
            </article>

          ))
        }
      </div>
    </section>
  )
}