import "./AboutPets.css"
import { Link } from "react-router-dom"
import MedicationIcon from '@mui/icons-material/Medication';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonIcon from '@mui/icons-material/Person';

function AboutPets() {
    return (
        <section className="about-pets">
            <div className="about-pets-inner container">
                <div className="about-pets-row-reverse">
                    <div className="about-pets-content" data-aos="fade-left">
                        <h5>Welcome</h5>
                        <h3>We are all about pets. Over 13+ years in the business</h3>
                        <p>Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.   </p>
                        <Link className="btn" to="/">Read More</Link>
                    </div>
                    <div className="about-pets-photo" data-aos="fade-right">
                        <img src="./img/b5.jpg" alt="dogs" />
                    </div>
                </div>
                <div className="about-pets-features">
                    <div className="pets-features-item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                        <div className="pets-features-icon">
                            <MedicationIcon />
                        </div>
                        <div className="pets-features-content">
                            <Link to="/">Puppy Training</Link>
                            <p>Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!.</p>
                        </div>
                    </div>
                    <div className="pets-features-item" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                        <div className="pets-features-icon">
                            <MedicalServicesIcon />
                        </div>
                        <div className="pets-features-content">
                            <Link to="/">Puppy Training</Link>
                            <p>Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!.</p>
                        </div>
                    </div>
                    <div className="pets-features-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                        <div className="pets-features-icon">
                            <PersonIcon />
                        </div>
                        <div className="pets-features-content">
                            <Link to="/">Puppy Training</Link>
                            <p>Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPets
