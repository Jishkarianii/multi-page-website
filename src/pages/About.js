import { useEffect } from 'react'
import AboutPets from '../components/AboutPets'
import PageBanner from '../components/PageBanner'
import PetCareService from '../components/PetCareService'
import TeamExperts from '../components/TeamExperts'

function About({ title }) {
    useEffect(() => {
        window.scrollTo({ top: 0 }); 
        document.title = `${title} page - Petspatial`
    }, [])

    return (
        <main style={{ overflow: "hidden" }}>
            <PageBanner page={title} />
            <AboutPets />
            <PetCareService />
            <TeamExperts />
        </main>
    )
}

export default About
