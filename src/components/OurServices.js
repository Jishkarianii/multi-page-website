import "./OurServices.css"
import ProgressBar from 'react-animated-progress-bar';

function OurServices() {
    return (
        <section className="our-services">
            <div className="our-services-inner container">
                <div className="our-services-content" data-aos="fade-right">
                    <h5>Our Services</h5>
                    <h3>Flexible, Trustworthy, and Reliable Care for Your Pet</h3>
                    <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet.</p>
                    <div className="progress-bar-cont">
                        <ProgressBar
                            width="100%"
                            height="6px"
                            rect
                            percentage="80"
                        />  
                        <ProgressBar
                            width="100%"
                            height="6px"
                            rect
                            percentage="95"
                        />
                        <ProgressBar
                            width="100%"
                            height="6px"
                            rect
                            percentage="75"
                        />
                    </div>
                </div>
                <div className="our-services-photo" data-aos="fade-left">
                    <img src="./img/b3.jpg" alt="dog" />
                </div>
            </div>
        </section>
    )
}

export default OurServices
