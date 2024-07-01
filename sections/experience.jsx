import Title from '@/components/title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'


export default function Experience () {

  const images = [
    "mobo",
    "chacomer",
    "luxacril",
    "dulce hogar",
    "frontliner",
    "bazar", 
    "forever",
    "mannela",
  ]

  return (

    <section 
      className={`
        experience
        container
        mx-auto
      `}
      id="experience"
    >

      <Title 
        title="Nuestra experiencia"
        subtitle="Conoce algunos de nuestros clientes y sus experiencias con nosotros"
      />

      <p
        className={`
          details
          w-11/12 md:w-full
          mx-auto
        `}
        data-aos="fade-down"
      >
        "Ahoraiteya", reconocida por su experiencia y fiabilidad en el ámbito de la logística, ha consolidado su presencia a nivel local y estamos en proceso de expansión en la región de América del Sur, específicamente en la ciudad de Ecuador, con planes futuros para establecer operaciones en dicho País. Este crecimiento refleja nuestro compromiso con la excelencia y nuestra capacidad para adaptarnos a diversos mercados y necesidades logísticas.
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        className={`
          items-center
          h-52
          my-10
        `}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        data-aos="fade-up"
      >
        {
          images.map((image, index) => (
            <SwiperSlide 
              key={index}
              className={`
                h-full
                !flex
                items-center
                justify-center
              `}
            >
              <img 
                src={`/images/experience/${image}.webp`}
                alt={`logo de ${image}`}
                className={`
                  w-full
                `}
              />
            </SwiperSlide>
          ))
        
        }
      </Swiper>
    </section>
  )
}