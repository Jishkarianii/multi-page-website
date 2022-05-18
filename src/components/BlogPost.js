import "./BlogPost.css"
import BlogPostsItem from "./BlogPostsItem"

const posts = [
    {
        id: 1,
        img: "./img/banner1.jpg",
        date: "9 Mar",
        title: "Hello world!", 
        author: "W3Layouts"
    },
    {
        id: 2,
        img: "./img/banner2.jpg",
        date: "9 Mar",
        title: "The best caretakers of any kind of pets?",
        author: "W3Layouts"
    }
]

function BlogPost() {
    return (
        <section className="blog-posts">
            <div 
                className="blog-posts-inner container" 
                data-aos="fade-up"
            >
                <div className="blog-posts-head">
                    <h5>Our Posts</h5>
                    <h3>Recent Blog Posts.</h3>
                </div>
                <div className="blog-posts-cont">
                    {posts.map((post, idx) => (
                        <BlogPostsItem 
                            key={post.id}
                            img={post.img}
                            date={post.date}
                            title={post.title}
                            author={post.author}
                            aos={idx ? "fade-left" : "fade-right"}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogPost
