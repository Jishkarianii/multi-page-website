import { useEffect } from "react";
import PageBanner from "../components/PageBanner"
import ContactInfo from "../components/ContactInfo"

function Contact({ title }) {
    useEffect(() => {
        window.scrollTo({ top: 0 }); 
        document.title = `${title} page - Petspatial`
    }, [])

    return (
        <main style={{ overflow: "hidden" }}>
            <PageBanner page={title} />
            <ContactInfo />
        </main>
    )
}

export default Contact
