import "./Features.css"
import { Link } from 'react-router-dom'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PanToolIcon from '@mui/icons-material/PanTool';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ShowerIcon from '@mui/icons-material/Shower';
import PersonIcon from '@mui/icons-material/Person';

function Features() {
    return (
        <section className="features container">
            <div 
                className="features-item" 
                data-aos="zoom-in" 
                data-aos-delay="100"
                data-aos-duration="500"
            >
                <AcUnitIcon className="features-icon" />
                <Link to="/">Dog Walking</Link>
            </div>
            <div 
                className="features-item" 
                data-aos="zoom-in" 
                data-aos-delay="200"
                data-aos-duration="500"
            >
                <RestaurantIcon className="features-icon" />
                <Link to="/">Healthy Meals</Link>
            </div>
            <div 
                className="features-item" 
                data-aos="zoom-in" 
                data-aos-delay="300"
                data-aos-duration="500"
            >
                <PanToolIcon className="features-icon" />
                <Link to="/">Pet Sitting</Link>
            </div>
            <div 
                className="features-item" 
                data-aos="zoom-in" 
                data-aos-delay="400"
                data-aos-duration="500"
            >
                <AccountTreeIcon className="features-icon" />
                <Link to="/">Dog Activities</Link>
            </div>
            <div 
                className="features-item" 
                data-aos="zoom-in" 
                data-aos-delay="500"
                data-aos-duration="500"
            >
                <ShowerIcon className="features-icon" />
                <Link to="/">Pet Daycare</Link>
            </div>
            <div 
                className="features-item" 
                data-aos="zoom-in" 
                data-aos-delay="600"
                data-aos-duration="500"
            >
                <PersonIcon className="features-icon" />
                <Link to="/">Pet Grooming</Link>
            </div>
        </section>
    )
}

export default Features
