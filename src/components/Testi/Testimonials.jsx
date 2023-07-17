import "../../styles/Testimonials.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//required models
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="portfolio section" id="testimonials">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="portfolio__container mySwiper"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "640": {
            slidesPerView: 1,
          },
          "768": {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]} // import swiper module here
      >
        {/* map through the data and create a card for each project */}

        {Data.map((item) => {
          return (
            <SwiperSlide className="portfolio__card" key={item.id}>
              <img src={item.image} alt="" className="portfolio__img" />
              <h3 className="portfolio__name">{item.title}</h3>
              <p className="portfolio__desc"> {item.description} </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
