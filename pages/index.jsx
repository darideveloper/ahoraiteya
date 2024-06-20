import { fontRegular } from "@/libs/fornts"
import Hero from "@/sections/hero"

export default function Home() {
  return (
    <main
      className={`
        ${fontRegular.className}
        w-full
        overflow-x-hidden
      `}
    >
      <Hero />
   
    </main>
  );
}
