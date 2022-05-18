import "./PetNutrition.css"
import { useState } from 'react'
import { Link } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';

function PetNutrition() {
    const [videoPlay, setVideoPlay] = useState(false);

    return (
        <section className="pet-nutrition">
            <img src="./img/banner4.jpg" alt="Pet Nutrition" />
            <div className="pet-nutrition-inner">
                <div className="pet-nutrition-content">
                    <h5 data-aos="fade-up">Better Pet Nutrition.</h5>
                    <h3 data-aos="fade-up" data-aos-delay="200">The finest fresh food and all your pet needs.</h3>
                    <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Iure voluptatibus explicabo officia.</p>
                    <Link className="btn" to="/" data-aos="fade-up" data-aos-delay="600">Contact Now</Link>
                </div>
                <div className="pet-nutrition-play-button" data-aos="zoom-in">
                    <div 
                        className="play-btn" 
                        onClick={() => {
                            setVideoPlay(true)
                        }}
                    >
                        <PlayArrowIcon />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div 
                className={`play-video-cont ${videoPlay ? "show-play-video" : ""}`}
                onClick={() => {
                    setVideoPlay(false)
                }}
            >
                <div className="play-video-inner">
                    <CloseIcon
                        onClick={() => {
                            setVideoPlay(false)
                        }}
                    />
                    {videoPlay && (
                        <iframe
                            src="https://player.vimeo.com/video/101587706" 
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PetNutrition
