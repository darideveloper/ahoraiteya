import { fontRegular } from "@/libs/fonts"
import Hero from "@/sections/hero"
import Services from "@/sections/services"
import OurApp from "@/sections/our-app"
import AboutUs from "@/sections/about-us"
import DownloadApp from "@/sections/download-app"

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
      {/* <OurApp /> */}
      {/* <AboutUs /> */}
      <DownloadApp />
    </main>
  )
}
