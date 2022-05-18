import { useEffect } from 'react'
import Intro from '../components/Intro'
import Features from '../components/Features'
import PetCare from '../components/PetCare'
import Petspatial from '../components/Petspatial'
import PetNutrition from '../components/PetNutrition'
import BlogPosts from '../components/BlogPost'
import Testimonials from '../components/Testimonials'
import Status from '../components/Status'

function Home({ title }) {
    useEffect(() => {
        window.scrollTo({ top: 0 }); 
        document.title = `${title} page - Petspatial`
    }, [])

    return (    
        <main style={{ overflow: "hidden" }}>
            <Intro />
            <Features />
            <PetCare />
            <Petspatial />
            <PetNutrition />
            <BlogPosts />
            <Testimonials />
            <Status />
        </main>
    )
}

export default Home
