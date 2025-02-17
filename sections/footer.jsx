import Link from 'next/link'
import MenuList from '@/components/menu-list'
import Logo from '@/components/logo'
import { footerMenuItems, socialItems } from '@/libs/menus'

export default function Footer() {

  return (
    <footer
      className={`
        bg-purple
        w-full
        py-6
        mt-12
        text-white
      `}
    >
      <div
        className={`
          content
          container
          mx-auto
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
          <Logo
            className={`
              mx-auto md:mx-0
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

      <p
        className={`
          w-11/12
          mx-auto
          text-center
          mt-6
        `}
      >
        © 2021 Ahoraiteya. Todos los derechos reservados. Powered by&nbsp;
        <Link
          href="https://api.whatsapp.com/send?phone=5214493402622"
          target="_blank"
        >
          Dari Developer
        </Link>
      </p>

    </footer>
  )
}