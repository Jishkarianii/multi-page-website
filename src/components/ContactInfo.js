import "./ContactInfo.css"
import HouseIcon from '@mui/icons-material/House';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function ContactInfo() {
    return (
        <section className="contact-info">
            <div className="contact-info-inner container">
                <div className="contact-info-content" data-aos="fade-up">
                    <div className="contact-info-content-left">
                        <h5>Get In Touch With Us</h5>
                        <h3>Let's discuss any services enquiry</h3>
                    </div>
                    <div className="contact-info-content-right">
                        <p>We are dedicated to the safety of our guests and employees and have updated our safety measures. We believe in Simple, Creative, Modern and Flexible Design Standards with a Retina and Responsive Approach.</p>
                    </div>
                </div>
                <div className="contact-info-cards">
                    <div className="contact-info-card-item" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500">
                        <span><HouseIcon /></span>
                        <h5>Contact Address</h5>
                        <p>#3456VL Petspatial, Corner Services, NY - 62617.</p>
                    </div>
                    <div className="contact-info-card-item" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
                        <span><MailOutlineIcon /></span>
                        <h5>Email address</h5>
                        <p>
                            <a href="mailto: contact@mail.com">contact@mail.com</a>
                            <a href="mailto: support@mail.com">support@mail.com</a>
                        </p>
                    </div>
                    <div className="contact-info-card-item" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
                        <span><LocalPhoneIcon /></span>
                        <h5>Contact phone</h5>
                        <p>
                            <a href="tel: +12 534 891 4364">+12 534 891 4364</a>
                            <a href="tel: +44 987 654 3211">+44 987 654 3211</a>
                        </p>
                    </div>
                    <div className="contact-info-card-item" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
                        <span><AccessTimeIcon /></span>
                        <h5>Opening hours</h5>
                        <p>Mon-Fri: 8 AM - 5 PM Sat-Sun: Closed</p>
                    </div>
                </div>
                <div className="contact-info-form">
                    <h4>Get in Touch. We're Here to Help</h4>
                    <form>
                        <div className="name-email-cont">
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                        </div>
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Message" required />
                        <div className="btn-cont">
                            <button className="btn">Send Message</button>
                        </div>
                    </form>
                </div>
                </div>
                <iframe className="contact-info-map" width="100%" height="400" src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </section>
    )
}

export default ContactInfo
