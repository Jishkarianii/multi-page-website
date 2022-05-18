import "./SingleBlog.css"
import { useState } from "react"
import { Link } from "@mui/material";
import BlogPostsItem from "./BlogPostsItem"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
    },
    {
        id: 3,
        img: "./img/banner3.jpg",
        date: "9 Mar",
        title: "The best caretakers of any kind of pets?",
        author: "W3Layouts"
    },
    {
        id: 4,
        img: "./img/banner4.jpg",
        date: "9 Mar",
        title: "The best caretakers of any kind of pets?",
        author: "W3Layouts"
    },
    {
        id: 5,
        img: "./img/banner1.jpg",
        date: "9 Mar",
        title: "The best caretakers of any kind of pets?",
        author: "W3Layouts"
    }
]

let results;

function SingleBlog() {
    const [inpValue, setInpValue] = useState("")
    const [filteredPosts, setFilteredPosts] = useState(posts)
    
    // Reset "results" variable value for first render
    if (filteredPosts.length === posts.length) {
        results = false;
    }

    const searchPosts = (e, value) => {
        e.preventDefault()

        const filtered = posts.filter(post => {
            return post.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        })

        setFilteredPosts(filtered)
        results = value
    }

    return (
        <section className="single-blog">
            {results && (
                <h4 className="single-blog-results">Search Results for: "{results}"</h4>
            )}
            <div className="single-blog-cont container">
                <div className="single-blog-posts">
                    {filteredPosts.length ? (
                        filteredPosts.map(post => (
                            <BlogPostsItem 
                                key={post.id}
                                img={post.img}
                                date={post.date}
                                title={post.title}
                                author={post.author}
                            />
                        ))
                    ) : (
                        <div className="single-blog-not-found">
                            <h4>Nothing Found</h4>
                            <p>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
                        </div>
                    )}
                </div>
                <div className="single-blog-sidebar">
                    <div className="single-blog-sidebar-inner">
                        <div className="single-blog-sidebar-item">
                            <form className="input-wrapper">
                                <input 
                                    type="text" 
                                    placeholder="Search..."
                                    value={inpValue}
                                    onChange={e => {
                                        setInpValue(e.target.value)
                                    }}
                                />
                                <button 
                                    className="btn search-btn"
                                    onClick={e => {
                                        searchPosts(e, inpValue)
                                    }}
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                        <div className="single-blog-sidebar-item">
                            <div className="single-blog-sidebar-content">
                                <h3>Recent Posts</h3>
                                <ul>
                                    <li onClick={e => searchPosts(e, "Hello World!")}>Hello World!</li>
                                    <li onClick={e => searchPosts(e, "The Best Caretakers Of Any Kind Of Pets?")}>The Best Caretakers Of Any Kind Of Pets?</li>
                                    <li onClick={e => searchPosts(e, "The Best Caretakers Of Any Kind Of Pets?")}>The Best Caretakers Of Any Kind Of Pets?</li>
                                    <li onClick={e => searchPosts(e, "The Best Caretakers Of Any Kind Of Pets?")}>The Best Caretakers Of Any Kind Of Pets?</li>
                                    <li onClick={e => searchPosts(e, "Hello World!")}>Hello World!</li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-blog-sidebar-item">
                            <div className="single-blog-sidebar-content">
                                <h3>Archives</h3>
                                <ul>
                                    <li><ChevronRightIcon /><Link to="/">March 2021</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-blog-sidebar-item">
                            <div className="single-blog-sidebar-content">
                                <h3>Categories</h3>
                                <ul>
                                    <li><ChevronRightIcon /><Link to="/">Dog</Link></li>
                                    <li><ChevronRightIcon /><Link to="/">Food</Link></li>
                                    <li><ChevronRightIcon /><Link to="/">Pet</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-blog-sidebar-item">
                            <div className="single-blog-sidebar-content">
                                <h3>Meta</h3>
                                <ul>
                                    <li><ChevronRightIcon /><Link to="/">Log in</Link></li>
                                    <li><ChevronRightIcon /><Link to="/">Entries Feed</Link></li>
                                    <li><ChevronRightIcon /><Link to="/">Comments Feed</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleBlog
