import "./BlogPostsItem.css"
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

function BlogPostsItem({ img, date, title, author, url = "/", aos = null}) {
    return (
        <div className="blog-posts-item" data-aos={aos}>
            <div className="blog-posts-img">
                <img src={img} alt="post" />
                <span>{date}</span>
            </div>
            <div className="blog-posts-content">
                <h4>{title}</h4>
                <p><PersonIcon /> Posted by <Link to={url}>{author}</Link></p>
                <Link className="btn" to={url}>Read More</Link>
            </div>
        </div>
    )
}

export default BlogPostsItem
