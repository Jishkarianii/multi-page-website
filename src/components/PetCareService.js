import "./PetCareService.css"
import { Link } from "react-router-dom"

function PetCareService() {
    return (
        <section className="pet-care-service container">
            <div className="pet-care-service-content" data-aos="fade-right">
                <h5>Why Us</h5>
                <h3>Established & Trusted Pet Care Service</h3>
                <p>Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat libero. Suspendisse eleifend nibh quis dui placerat fermentum.n molestie nulla felis, vitae feugiat justo pulvinar et.</p>
                <ul className="pet-care-service-list">
                    <li data-aos="fade" data-aos-delay="100">Aliquam blandit vel sapien eget aliquam.</li>
                    <li data-aos="fade" data-aos-delay="200">Phasellus eget volutpat libero.</li>
                    <li data-aos="fade" data-aos-delay="300">Aliquam blandit vel sapien eget aliquam.</li>
                    <li data-aos="fade" data-aos-delay="400">Phasellus eget volutpat libero.</li>
                </ul>
                <Link className="btn" to="/">Read More</Link>
            </div>
            <div className="pet-care-service-photo" data-aos="fade-left">
                <img src="./img/b3.jpg" alt="dog" />
            </div>
        </section>
    )
}

export default PetCareService
