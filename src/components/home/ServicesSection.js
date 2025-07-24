'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { servicesData } from '../../../data/serviceCards/serviceCards';
import ServiceCard from '../ServiceCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ServicesSlider = () => {
  return (
    <section className="bg-accent-background">
      <div className="px-40 py-20 bg-secondary-background rounded-b-[56px]">
        <div className="flex flex-col gap-y-10">
          <div className="w-3/4 mx-auto flex flex-col gap-y-2.5">
            <h2 className="text-5xl text-center font-bold text-primary-text font-lato">
              Nuestros Servicios de Enfermería a Domicilio
            </h2>
            <p className="text-center">
              Atención integral y personalizada para tu bienestar en casa.
            </p>
          </div>

          {/* Mobile: Slider, Desktop: Grid */}
          <div className="block lg:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
              }}
              className="services-mobile-swiper"
            >
              {servicesData.map((service) => (
                <SwiperSlide key={service.id}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-x-5 gap-y-5">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;