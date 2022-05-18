import "./OurPlans.css"
import { Link } from "react-router-dom"

function OurPlans() {
    return (
        <section className="our-plans">
            <div className="our-plans-inner container">
                <div className="our-plans-title">
                    <h5 data-aos="fade-up">Our Plans</h5>
                    <h3 data-aos="fade-up" data-aos-delay="200">Affordable Packages</h3>
                </div>
                <div className="our-plans-package-cont" data-aos="fade-up">
                    <div className="our-plans-package-item" data-aos="fade-right">
                        <h6>Free Package</h6>
                        <h4><span>$</span>0<span>/month</span></h4>
                        <ul>
                            <li>5 Dog Walk</li>
                            <li>3 Vet Visit</li>
                            <li>3 Pet Spa</li>
                            <li>Free Supports</li>
                            <li>Customer Support</li>
                        </ul>
                        <Link className="btn outline-btn" to="/">Buy Now</Link>
                    </div>
                    <div className="our-plans-package-item standard-package">
                        <div className="standard-package-header">
                            <h5>SAVE 10%</h5>
                            <h3>Standard Package</h3>
                            <h4><span>$</span>39<span>/month</span></h4>
                        </div>
                        <div className="standard-package-body">
                            <ul>
                                <li>5 Dog Walk</li>
                                <li>3 Vet Visit</li>
                                <li>3 Pet Spa</li>
                                <li>Free Supports</li>
                                <li>Customer Support</li>
                            </ul>
                            <Link className="btn" to="/">Buy Now</Link>
                        </div>
                    </div>
                    <div className="our-plans-package-item" data-aos="fade-left">
                        <h6>Pro Package</h6>
                        <h4><span>$</span>89<span>/month</span></h4>
                        <ul>
                            <li>5 Dog Walk</li>
                            <li>3 Vet Visit</li>
                            <li>3 Pet Spa</li>
                            <li>Free Supports</li>
                            <li>Customer Support</li>
                        </ul>
                        <Link className="btn outline-btn" to="/">Buy Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPlans
