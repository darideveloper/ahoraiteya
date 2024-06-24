import Cta from '@/components/cta'

export default function DownloadApp() {
  return (
    <section
      href=""
      className={`
        download-app
        bg-purple
        text-white
        text-center
        py-6
      `}
    >
      <div 
        className={`
          container
          mx-auto
          flex
          flex-col md:flex-row
          items-center
          justify-between
        `}
      >

        <div 
          className={`
            texts
          `}
        >
          <h2
            className={`
              text-2xl
            `}
          >
            Obten un servicio rápido y confiable
          </h2>
          <p
            className={`
              
            `}
          >
            Fácil de usar, solo registrate y sigue las instrucciones
          </p>
        </div>

        <Cta 
          href="https://play.google.com/store/apps/details?id=py.com.neosystem.ahoraiteya&hl=es_PY"
          className={`
            my-4
            inline-block
          `}
          target="_blank"
        >
          Descarga la App
        </Cta>
      </div>
    </section>
  )
}