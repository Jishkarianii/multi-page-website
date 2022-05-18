import { useEffect } from 'react'
import OurPlans from '../components/OurPlans'
import OurServices from '../components/OurServices'
import OurSitters from '../components/OurSitters'
import PageBanner from '../components/PageBanner'

function Services({ title }) {
    useEffect(() => {
        window.scrollTo({ top: 0 }); 
        document.title = `${title} page - Petspatial`
    }, [])

    return (
        <main style={{ overflow: "hidden" }}>
            <PageBanner page={title} />
            <OurServices />
            <OurSitters />
            <OurPlans />
        </main>
    )
}

export default Services
