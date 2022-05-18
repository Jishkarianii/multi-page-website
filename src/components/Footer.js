import "./Footer.css"
import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <footer>
            <div className="footer-cont container">
                <div className="footer-inner">
                    <div className="footer-contact">
                        <Link to="/">Pet <span>spatial.</span></Link>
                        <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet Semper at elit.</p>
                        <div className="footer-social">
                            <a href="#"><span><FacebookIcon /></span></a>
                            <a href="#"><span><TwitterIcon /></span></a>
                            <a href="#"><span><InstagramIcon /></span></a>
                            <a href="#"><span><LinkedInIcon /></span></a>
                        </div>
                    </div>
                    <div className="footer-subscribe">
                        <h5>Subscribe Newsletter</h5>
                        <form>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                required 
                            />
                            <button className="btn">Subscribe</button>
                        </form>
                        <p>By submitting this form, you agree to the <a href="#">privacy policy</a> and <a href="#">terms of use</a></p>
                    </div>
                </div>
                <p className="copyright">© {new Date().getFullYear()} Petspatial. All Rights Reserved | WordPress Theme by <a href="#">W3Layouts.</a></p>
            </div>
        </footer>
    )
}

export default Footer
