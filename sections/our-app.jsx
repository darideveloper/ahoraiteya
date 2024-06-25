import { useState } from 'react'
import Title from '@/components/title'
import DetailCard from '@/components/detail-card'
import AppImage from '@/components/app-image'

export default function OurApp() {

  
  const steps = [
    {
      "title": "Paso 1",
      "description": "Ingresa el destino del paquete",
    },
    {
      "title": "Paso 2",
      "description": "Indica el putno de recoleccion",
    },
    {
      "title": "Paso 3",
      "description": "Ingresa los detalles del envío",
    },
    {
      "title": "Paso 3",
      "description": "Conforma el pedido y paga",
    },
  ]

  const imagesPaths = steps.map((_, index) => `/images/paso-${index + 1}.png`)

  const [currentStep, setCurrentStep] = useState(0)
  
  return (

    <section 
      className={`
        our-app
        container
        mx-auto
      `}
    >
      <Title 
        title="Nuestra App"
        subtitle="¿Cómo funciona?"
        className={`
          
        `}
      />

      <p
        className={`
          details
          text-center md:text-left
        `}
      >
        Nuestra app es intuitiva y fácil de usar. Sigue estos simples pasos para enviar tu paquete:
      </p>

      <div 
        className={`
          content
          flex
          flex-col-reverse md:flex-row
          items-center
          justify-between md:justify-evenly
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
        >
          {
            steps.map((step, index) => (
              <DetailCard 
                key={index}
                title={step.title}
                description={step.description}
                onClick={() => setCurrentStep(index)}
                step={index}
                currentStep={currentStep}
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
            mt-4
            relative
          `}
        >

          {
            imagesPaths.map((src, index) => (
              <AppImage 
                key={index}
                src={src}
                step={index}
                currentStep={currentStep}
              />
            )) 
          }

        </div>
      </div>
    </section>
  )
}