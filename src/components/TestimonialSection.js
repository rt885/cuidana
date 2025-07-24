// src/components/TestimonialSlider.js
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Monterrey, N.L.",
      rating: 5,
      comment: "Excelente servicio. La enfermera llegó puntual y fue muy profesional. Mi madre se sintió muy cómoda y bien atendida.",
      avatar: "/images/testimonials/maria.jpg"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      location: "San Pedro, N.L.",
      rating: 5,
      comment: "Necesitaba cuidados post-operatorios y el servicio fue excepcional. Personal altamente capacitado y muy humano.",
      avatar: "/images/testimonials/carlos.jpg"
    },
    {
      id: 3,
      name: "Ana Martínez",
      location: "Santa Catarina, N.L.",
      rating: 5,
      comment: "Para el cuidado de mi recién nacido, no pude haber elegido mejor. Profesionales y muy atentas. Súper recomendado.",
      avatar: "/images/testimonials/ana.jpg"
    },
    {
      id: 4,
      name: "Roberto Silva",
      location: "Guadalupe, N.L.",
      rating: 5,
      comment: "Mi padre requería administración de medicamentos y seguimiento. El servicio fue impecable y nos dieron mucha tranquilidad.",
      avatar: "/images/testimonials/roberto.jpg"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-secondary-background">
      <div className="bg-accent-background py-16 rounded-b-[56px]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white-text font-lato">
            Lo que opinan nuestros usuarios
          </h2>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-secondary-background rounded-2xl p-6 shadow-lg h-full">
                  {/* Header con avatar y info */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-primary-text">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.comment}"
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button className="swiper-button-prev-custom bg-secondary-background hover:bg-gray-300 text-primary-blue p-3 rounded-full shadow-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom bg-secondary-background hover:bg-gray-300 text-primary-blue p-3 rounded-full shadow-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;