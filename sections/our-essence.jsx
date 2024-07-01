import { useState, useEffect } from 'react'
import Title from '@/components/title'
import DetailCard from '@/components/detail-card'
import Essence from '@/components/essence'

export default function OurEssence() {
  
  const essenceData = [
    {
      "title": "Misión",
      "description": "Proporcionar un servicio de entrega confiable y eficiente, apoyando la sostenibilidad y el crecimiento económico local.",
      "secondary": false,
    },
    {
      "title": "Visión",
      "description": "Consolidarnos como líderes en la logística de entrega, destacándonos por nuestra innovación y calidad de servicio",
      "secondary": false,
    },
    {
      "title": "Objetivo: Eficiencia y presición",
      "description": "Maximizamos la eficacia de cada entrega",
      "secondary": true,
    },
    {
      "title": "Objetivo: Comprimiso con la innovación",
      "description": "Mejora continua de nuestra tecnología para superar las expectativas del mercado",
      "secondary": true,
    },
    {
      "title": "Objetivo: Transparencia",
      "description": "Monitoreo en tiempo real de cada envío.",
      "secondary": true,
    },
  ]

  const [currentEssence, setCurrentEssence] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)


  function goNext() {
    if (isAutoPlay) {
      if (currentEssence < essenceData.length - 1) {
        setCurrentEssence(currentEssence + 1)
      } else {
        setCurrentEssence(0)
      }
    }
  }

  // Auto change essence index
  useEffect(() => {
    if (isAutoPlay) {
      const timer = setTimeout(() => {
        goNext()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [currentEssence, isAutoPlay]); 
  
  return (

    <section 
      className={`
        our-essence
        container
        mx-auto
      `}
      id="our-essence"
    >
      <Title 
        title="Nuestra Esencia"
        subtitle="Conoce nuestra misión, visión y objetivos"
        className={`
          
        `}
      />

      <p
        className={`
          details
          text-center md:text-left
        `}
      >
        Somos una empresa comprometida con la calidad y la innovación. Nuestros objetivos son claros y precisos, y trabajamos día a día para cumplirlos.
      </p>

      <div 
        className={`
          content
          flex
          flex-col md:flex-row
          items-center
          justify-between md:justify-evenly
          mt-12
        `}
      >

        <div
          className={`
            details-cards
            flex
            flex-col
            gap-6
            w-full md:w-1/2
            max-w-sm
          `}
          data-aos="zoom-in-right"
        >
          {
            essenceData.map((essence, index) => (
              <DetailCard 
                key={index}
                title={essence.title}
                onClick={() => {
                  setIsAutoPlay(false)
                  setCurrentEssence(index)
                }}
                index={index}
                currentEssence={currentEssence}
              />
            ))
          }

        </div>

        <div 
          className={`
            app-images
            w-80 md:w-1/3
            max-w-64
            mx-auto md:mx-0
            my-10
            relative
          `}
          data-aos="zoom-out"
          data-aos-delay="300"
        >

          {
            essenceData.map((essence, index) => (
              <Essence 
                key={index}
                title={essence.title}
                details={essence.description}
                src={`/images/our-essence/${essence.title.toLowerCase().replace(':', "")}.webp`}
                index={index}
                currentEssence={currentEssence}
              />
            )) 
          }

        </div>
      </div>
    </section>
  )
}