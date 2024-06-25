import Title from '@/components/title'
import Input from '@/components/input'

export default function Contact() {

  const inputs = [
    {
      "label": "Correo electrónico",
      "type": "email"
    },
    {
      "label": "Teléfono",
      "type": "tel"
    },
    {
      "label": "Mensaje",
      "type": "text"
    }
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
        action=""
        className={`
        `}
      >
        {
          inputs.map((input, index) => (
            <Input 
              key={index}
              label={input.label}
              type={input.type}
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
      </form>
    </section>
  )
}