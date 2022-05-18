import "./PageBanner.css"
import { Link } from "react-router-dom"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function PageBanner({ page }) {
    return (
        <section className="page-banner">
            <div className="page-banner-bg">
                <img src="./img/banner2.jpg" alt="cat" />
            </div>
            <div className="page-banner-name container">
                <Link to="/">Home</Link> 
                <KeyboardDoubleArrowRightIcon />
                {page} page
            </div>
        </section>
    )
}

export default PageBanner
