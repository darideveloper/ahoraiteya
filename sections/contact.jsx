import Title from '@/components/title'
import Input from '@/components/input'
import { fromCredentials, formHost } from '@/libs/form'
import Swal from 'sweetalert2'
import { use, useEffect, useState } from 'react'
import { useRouter } from 'next/router';


export default function Contact() {

  // Pages states
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState('')
  
  // Input states
  const [inputEmail, setInputEmail] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputMessage, setInputMessage] = useState('')
  const [inputUser, setInputUser] = useState(fromCredentials.user)
  const [inputApiKey, setInputApiKey] = useState(fromCredentials.apiKey)
  const [inputRedirect, setInputRedirect] = useState("")

  // Form state
  const [isSending, setIsSending] = useState(false)

  // Show alert in thanks page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPage(window.location.href)
      if (currentPage.includes('thanks=true')) {
        Swal.fire({
          title: 'Gracias por contactarnos',
          text: 'En breve nos pondremos en contacto contigo',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // Redirect to home after click in "ok"
        .then (() => {
          // Get url without thanks poram
          const initialUrl = currentPage.split('?')[0]
          window.location.href = initialUrl
        })
      }
    }
  }, [router])

  // Update redirect page
  useEffect(() => {
    setInputRedirect(`${currentPage}?thanks=true`)
  }, [currentPage])

  const inputs = [
    {
      "label": "Correo electrónico",
      "type": "email",
      "name": "email",
      "value": inputEmail,
      "setValue": setInputEmail
    },
    {
      "label": "Teléfono",
      "type": "tel",
      "name": "telefono",
      "value": inputPhone,
      "setValue": setInputPhone,
    },
    {
      "label": "Mensaje",
      "type": "text",
      "name": "mensaje",
      "value": inputMessage,
      "setValue": setInputMessage,
    },
    {
      "label": "",
      "type": "hidden",
      "name": "user",
      "value": inputUser,
      "setValue": setInputUser,
    },
    {
      "label": "",
      "type": "hidden",
      "name": "api_key",
      "value": inputApiKey,
      "setValue": setInputApiKey,
    },
    {
      "label": "",
      "type": "hidden",
      "name": "redirect",
      "value": inputRedirect,
      "setValue": setInputRedirect,
    },
  ]


  return (
    <section 
      className={`
        contact
        container
        w-11/12
        mx-auto
        max-w-2xl
      `}
      id="contact"
    >
      <Title 
        title="Contáctanos"
        subtitle="Estamos para ayudarte"
        className={`
          !text-center
        `}
      />  

      <form 
        action={formHost}
        method='POST'
        onSubmit={(e) => {
          e.preventDefault()
          setIsSending(true)
          e.target.submit()
        }}
      >

        {
          isSending
          ? 
          <img 
            src="/images/spinner.gif"
            className={`
              w-24
              mx-auto
            `}
          />
          :
          <>
            {/* Regular inputs */}
            {
              inputs.map((input, index) => (
                <Input 
                  key={index}
                  label={input.label}
                  type={input.type}
                  name={input.name}
                  value={input.value}
                  setValue={input.setValue}
                />
              ))
            }

            <input
              type="submit"
              value="Enviar"
              className={`
                submit
                group
                bg-orange hover:bg-transparent
                text-white
                hover:text-orange
                border-2
                border-orange
                px-8
                py-2
                text-xl md:text-2xl
                duration-300
                hover:scale-105
                rounded-full
                my-4
                mx-auto sm:mx-0
                block
              `}
            />
          </>
        }
        
      </form>
    </section>
  )
}