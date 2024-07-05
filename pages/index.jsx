import Hero from "@/sections/hero"
import Benefits from "@/sections/benefits"
import Experience from "@/sections/experience"
import OurEssence from "@/sections/our-essence"
import WhyChooseUs from "@/sections/why-choose-us"
import DownloadApp from "@/sections/download-app"
import JoinUs from "@/sections/join-us"
import Contact from "@/sections/contact"
import Head from 'next/head'
import { metaData } from "@/libs/meta"


export default function Home() {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <link rel="icon" type="image/x-icon" href="/web/favicon.ico"></link>
      </Head>
      <Hero />
      <Benefits />
      <Experience />
      <OurEssence />
      <DownloadApp />
      <WhyChooseUs />
      <JoinUs />
      <Contact />
    </>
  )
}
