import "./Petspatial.css"
import { Link } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';

function Petspatial() {
    return (
        <section className="petspatial container">
            <div className="petspatial-photo" data-aos="fade-right">
                <img src="./img/b3.jpg" alt="dog" />
            </div>
            <div className="petspatial-content" data-aos="fade-left">
                <h5>Why Choose Us</h5>
                <h3>Why Petspatial?</h3>
                <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Learn more about our work! Lorem ipsum viverra feugiat.</p>
                <ul className="petspatial-list">
                    <li data-aos="fade" data-aos-delay="100"><CheckIcon /> Pellen tesque libero ut justo</li>
                    <li data-aos="fade" data-aos-delay="200"><CheckIcon /> Lorem ipsum dolor sit amet elit</li>
                    <li data-aos="fade" data-aos-delay="300"><CheckIcon /> Pellen tesque libero ut justo</li>
                </ul>
                <Link className="btn" to="/">Read More</Link>
            </div>
        </section>
    )
}

export default Petspatial
