import { useEffect } from 'react';
import PageBanner from '../components/PageBanner'
import SingleBlog from '../components/SingleBlog'

function BlogPosts({ title }) {
    useEffect(() => {
        window.scrollTo({ top: 0 }); 
        document.title = `${title} page - Petspatial`
    }, [])

    return (
        <main>
            <PageBanner page={title} />
            <SingleBlog />
        </main>
    )
}

export default BlogPosts
