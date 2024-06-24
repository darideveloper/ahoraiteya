import { fontRegular } from "@/libs/fonts"
import Hero from "@/sections/hero"
import Services from "@/sections/services"
import OurApp from "@/sections/our-app"

export default function Index() {
  return (
    <main
      className={`
        w-full
        overflow-x-hidden
        ${fontRegular.className}
      `}
    >

      {/* <Hero /> */}
      {/* <Services /> */}
      <OurApp />
    </main>
  )
}
