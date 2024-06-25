import "@/styles/globals.sass"
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from "react"

export default function App({ Component, pageProps }) {

  useEffect(() => {
    console.log('AOS.init')
    AOS.init({
      duration: 1000,
    })
  }, [])

  return <Component {...pageProps} />
}
