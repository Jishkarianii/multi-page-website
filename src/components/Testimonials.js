import "./Testimonials.css"
import { useState, useEffect } from "react";
import TestimonialsItem from "./TestimonialsItem";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const slide = [
    {
        id: 1,
        title: "Pellen tesque libero ut justo",
        comment: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
        photo: "./img/team1.jpg",
        name: "Johnson william",
        city: "Example City"
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        comment: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
        photo: "./img/team2.jpg",
        name: "Alexander sakura",
        city: "Example City"
    },
    {
        id: 3,
        title: "Pellen tesque libero ut justo",
        comment: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
        photo: "./img/team3.jpg",
        name: "John wilson",
        city: "Example City"
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet",
        comment: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
        photo: "./img/team4.jpg",
        name: "Julia sakura",
        city: "Example City"
    },
    {
        id: 5,
        title: "Pellen tesque libero ut justo",
        comment: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
        photo: "./img/team5.jpg",
        name: "John wilson",
        city: "Example City"
    },
]

function Testimonials() {
    const [slideView, setSlideView] = useState(2)

    useEffect(() => {
        handleResize()
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const handleResize = () => {
        // Check window width for slider responsive
        if (window.innerWidth < 1100) {
            setSlideView(1)
        } else {
            setSlideView(2)
        }
    }

    return (
        <section className="testimonials container" data-aos="fade-up">
            <img className="testimonials-bg" src="./img/banner2.jpg" alt="cat" />
            <div className="testimonials-inner">
                <div className="testimonials-content">
                    <h5 data-aos="fade-up">Reviews</h5>
                    <h3 data-aos="fade-up" data-aos-delay="200">Testimonials</h3>
                    <p data-aos="fade-up" data-aos-delay="200">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum viverra feugiat.</p>
                </div>
                <Swiper 
                    className="mySwiper"
                    loop={true}
                    slidesPerView={slideView}
                    spaceBetween={30}
                    grabCursor={true} 
                    pagination={true}
                    pagination={{
                        "clickable": true,
                    }}
                >
                    {slide.map(slide => (
                        <SwiperSlide 
                            key={slide.id}
                        >
                            <TestimonialsItem 
                                title={slide.title}
                                comment={slide.comment}
                                photo={slide.photo}
                                name={slide.name}
                                city={slide.city}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
