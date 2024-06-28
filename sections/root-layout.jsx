import PropTypes from "prop-types"
import Footer from "@/sections/footer"
import CtaWhatsapp from "@/sections/cta-whatsapp"
import { fontRegular } from "@/libs/fonts"

export default function RootLayout ({children}) {

  return (
    <>
      <main
        className={`
          w-full
          overflow-x-hidden
          ${fontRegular.className}
        `}
      >
        {children}
      </main>
      <CtaWhatsapp />
      <Footer />
    </>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}