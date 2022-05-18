// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "./Intro.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Autoplay
} from 'swiper';

import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

function Intro() {
  return (
    <section className="intro">
        <Swiper 
            className="mySwiper"
            loop={true}
            pagination={true}
            pagination={{
                "clickable": true,
            }}
            autoplay={{
                "delay": 4500,
                "disableOnInteraction": false
            }}
        >
            <SwiperSlide>
                <img src="./img/banner1.jpg" alt="banner" />
                <div className="slider-cont container">
                    <h3 data-aos="fade-up">Grooming & Pet Supplies.</h3>
                    <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. </p>
                    <Link to="/about" data-aos="fade-up" data-aos-delay="1800">Read More</Link>
                    <div className="slider-info" data-aos="fade-up" data-aos-delay="1000">
                        <p><strong>Our Location :</strong> 253 Adams Ave, Iowa</p>
                        <p><strong>Open Hours :</strong> Mon - Sat 8am - 6pm</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="./img/banner2.jpg" alt="banner" />
                <div className="slider-cont container">
                    <h3>Caring is More Daring.</h3>
                    <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. </p>
                    <Link to="/about">Read More</Link>
                    <div className="slider-info">
                        <p><strong>Our Location :</strong> 253 Adams Ave, Iowa</p>
                        <p><strong>Open Hours :</strong> Mon - Sat 8am - 6pm</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="./img/banner3.jpg" alt="banner" />
                <div className="slider-cont container">
                    <h3>Grooming & Pet Supplies.</h3>
                    <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. </p>
                    <Link to="/about">Read More</Link>
                    <div className="slider-info">
                        <p><strong>Our Location :</strong> 253 Adams Ave, Iowa</p>
                        <p><strong>Open Hours :</strong> Mon - Sat 8am - 6pm</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Intro;