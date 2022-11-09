import './Testimonials.scss'
import { testimonialsData } from '../../data'

// Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper
            className='container testimonials'
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView= {1}
            pagination={{ clickable: true }}
        >
      {testimonialsData.map((item) => {
        return (
          <SwiperSlide key={item.id} className='testimonials__testimonial'>
          <div className="testimonials__avatar">
             <img src={item.avatar} alt={item.name} />
          </div>
        <h5 className='testimonials__name' >{item.name}</h5>
        <small className='testimonials__review'>{item.review}</small>
      </SwiperSlide>
        )
      })}
        </Swiper>
    </section>
  )
}

export default Testimonials
