import "./TestimonialsItem.css"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function TestimonialsItem({ title, comment, photo, name, city }) {
    return (
        <div className="testimonials-item">
            <div className="testimonials-user-comment">
                <FormatQuoteIcon />
                <h5>{title}</h5>
                <p>{comment}</p>
            </div>
            <div className="testimonials-user-info">
                <div className="user-photo">
                    <img src={photo} alt="user" />
                </div>
                <div className="user-name">
                    <h4>{name}</h4>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsItem
