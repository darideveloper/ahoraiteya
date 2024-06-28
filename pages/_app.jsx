import "@/styles/globals.sass"
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from "react"
import RootLayout from "@/sections/root-layout"

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <RootLayout >
      <Component {...pageProps} />
    </RootLayout>
  ) 
}
