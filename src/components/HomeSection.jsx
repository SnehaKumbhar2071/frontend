import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import standImage from "../assets/images/stand.png";

const HomeSection = () => {
  const bookImages = [
    'https://m.media-amazon.com/images/I/61Iz2yy2CKL.jpg',
    'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
    'https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg',
    'https://m.media-amazon.com/images/I/71g2ednj0JL.jpg',
    'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
    'https://m.media-amazon.com/images/I/81vpsIs58WL.jpg'
  ];

  return (
    <section className="home bg-gray-300 py-8" id="home">
      <div className="row flex flex-col md:flex-row items-center justify-center">
        <div className="content text-center md:text-left p-4">
          <h3 className="text-5xl font-bold text-black mb-4">Recently uploaded Books!!!</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            There is good news for all of you! New books are added!!!
          </p>
          <a href="#" className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Request Now
          </a>
        </div>

        <div className="swiper books-slider w-full md:w-1/2 p-4 text-center mt-8">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="swiper-wrapper"
          >
            {bookImages.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide transform hover:scale-90 transition">
                <a href="#">
                  <img src={image} alt={`Book ${index + 1}`} className="h-64 w-full rounded-lg shadow-lg" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <img
            src={standImage}
            className="stand w-full mt-4 -mt-8"
            alt="Stand"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
