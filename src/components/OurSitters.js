import "./OurSitters.css"

function OurSitters() {
    return (
        <section className="our-sitters container">
            <div className="our-sitters-content" data-aos="fade-right">
                <h5>Our Services</h5>
                <h3>Our Sitters Are Thoroughly Vetted</h3>
                <p>Lorem ipsum dolor sit, elit dolores nulla quisdam. minus aliquam corrupti, modi ipsum natus sit pariatur. Curabitur mattis orci sed leo mattis, nec maximus nibh faucibus lorem dolor sit. it’s clinically clean. Lorem ipsum dolor sit.</p>
                <div className="our-sitters-content-inner">
                    <div className="our-sitters-content-inner-photo">
                        <img src="./img/banner2.jpg" alt="cat" />
                    </div>
                    <div className="our-sitters-content-inner-text">
                        <p>Lorem ipsum dolor sit, elit dolores nulla quisdam. minus aliquam corrupti, modi ipsum natus sit pariatur. Curabitur mattis orci sed leo mattis, nec maximus nibh faucibus lorem dolor sit. it’s clinically clean. Lorem ipsum dolor sit, elit dolores nulla dolor sit.</p>
                    </div>
                </div>
            </div>
            <div className="our-sitters-photo" data-aos="fade-left">
                <img src="./img/ab2.jpg" alt="dog" />
            </div>
        </section>
    )
}

export default OurSitters
