import PropTypes from "prop-types"
import Footer from "@/sections/footer"
import CtaWhatsapp from "@/sections/cta-whatsapp"
import Header from "@/sections/header"
import { fontRegular } from "@/libs/fonts"

export default function RootLayout ({children}) {

  return (
    <>
      <Header />
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