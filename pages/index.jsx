import Hero from "@/sections/hero"
import Services from "@/sections/services"
import { fontRegular } from "@/libs/fonts"

export default function Index() {
  return (
    <main
      className={`
        w-full
        overflow-x-hidden
        ${fontRegular.className}
      `}
    >

      <Hero />
      <Services />
    </main>
  )
}
