import "./PetCare.css"
import { Link } from "react-router-dom"

function PetCare() {
    return (
        <section className="pet-care">
            <div className="pet-care-inner container">
                <div className="pet-care-row">
                    <div className="pet-care-content" data-aos="fade-right">
                        <h5>Love Your Pet</h5>
                        <h3>Established & Trusted Pet Care Service</h3>
                        <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa! Vivamus a et ut justo, init in dolor et.</p>
                        <Link className="btn" to="/">Read More</Link>
                    </div>
                    <div className="pet-care-photo" data-aos="fade-left">
                        <img src="./img/b1.jpg" alt="dog" />
                    </div>
                </div>
                <div className="pet-care-row-reverse">
                    <div className="pet-care-content" data-aos="fade-left">
                        <h5>Pet Care</h5>
                        <h3>Reliable & Affordable in home pet care.</h3>
                        <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa! Vivamus a et ut justo, init in dolor et.</p>
                        <Link className="btn" to="/">Read More</Link>
                    </div>
                    <div className="pet-care-photo" data-aos="fade-right">
                        <img src="./img/b2.jpg" alt="dogs" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PetCare
