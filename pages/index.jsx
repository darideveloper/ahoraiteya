import { fontRegular } from "@/libs/fonts"
import Hero from "@/sections/hero"
import Benefits from "@/sections/benefits"
import OurApp from "@/sections/our-app"
import AboutUs from "@/sections/about-us"
import DownloadApp from "@/sections/download-app"
import JoinUs from "@/sections/join-us"
import Contact from "@/sections/contact"

export default function Home() {
  return (
    <main
      className={`
        w-full
        overflow-x-hidden
        ${fontRegular.className}
      `}
    >

      <Hero />
      <Benefits />
      <OurApp />
      <DownloadApp />
      <AboutUs />
      <JoinUs />
      <Contact />
    </main>
  )
}
