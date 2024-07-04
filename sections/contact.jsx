import Title from '@/components/title'
import Input from '@/components/input'
import { formHost, formTexts } from '@/libs/form'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'


export default function Contact() {
  
  // Input states
  const [inputEmail, setInputEmail] = useState('')
  const [inputName, setInputName] = useState('')
  const [inputMessage, setInputMessage] = useState('')

  // Form state
  const [isSending, setIsSending] = useState(false)

  // Submit form webhook
  function onSubmit(e) {
    // Send form data as json post request
    e.preventDefault()
    setIsSending(true)

    axios.post(formHost, {
      name: inputName,
      email: inputEmail,
      message: inputMessage
    })
    // Show alerts based on response status
    .then(() => {

      // Show success alert
      Swal.fire({
        title: formTexts.success.title,
        text: formTexts.success.text,
        icon: 'success',
        confirmButtonText: 'Entendido'
      })

      // Clear inputs
      setInputEmail('')
      setInputName('')
      setInputMessage('')
    })
    .catch((err) => {

      // Show error alert
      Swal.fire({
        title: formTexts.error.title,
        text: formTexts.error.text,
        icon: 'error',
        confirmButtonText: 'Entendido'
      })
    })
    setIsSending(false)
  }

  const inputs = [
    {
      "label": "Nombre",
      "type": "text",
      "name": "name",
      "value": inputName,
      "setValue": setInputName,
    },
    {
      "label": "Correo electrónico",
      "type": "email",
      "name": "email",
      "value": inputEmail,
      "setValue": setInputEmail
    },
    {
      "label": "Mensaje",
      "type": "text",
      "name": "mensaje",
      "value": inputMessage,
      "setValue": setInputMessage,
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
        onSubmit={(e) => onSubmit(e)}
      >

        {
          isSending
          ? 
          <img 
            src="/web/images/spinner.gif"
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
                  delay={index * 300}
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
                pointer
              `}
            />
          </>
        }
        
      </form>
    </section>
  )
}