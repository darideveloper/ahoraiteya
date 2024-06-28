import { footerMenuItems, socialItems } from '@/libs/menus'
import MenuList from '@/components/menu-list'

export default function Footer() {

  return (
    <footer
      className={`
        bg-purple
        w-full
        py-6
        mt-12
      `}
    >
      <div
        className={`
          content
          container
          mx-auto
          text-white
          flex
          flex-col md:flex-row
          justify-center lg:justify-evenly
          gap-12
        `}
      >

        <div
          className={`
            left
          `}
        >
          <img
            src="/images/logo.png"
            alt="AhoraiteYa Logo"
            className={`
              w-40
              mx-auto
              my-6              
            `}
          />

          <p
            className={`
              text-center
              max-w-xs
              text-sm
              mx-auto
            `}
          >
            Comprometidos con la calidad y la excelencia en el servicio en cada entrega.
            Nuestros más de 1 millon de envios realizados, y miles de clientes satisfechos, nos respaldan.
          </p>

        </div>

        <div
          className={`
          right
          flex
          flex-col sm:flex-row
          justify-center
          items-center sm:items-start
          gap-12
        `}
        >

        <MenuList 
          title="Enlaces"
          menuItems={footerMenuItems}
          target="_self"
        />

        <MenuList 
          title="Redes Sociales"
          menuItems={socialItems}
          target="_blank"
        />
          
        </div>
      </div>
    </footer>
  )
}