import PropTypes from "prop-types"
import Footer from "@/sections/footer"
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
      <Footer />
    </>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}