import "./TeamExperts.css"
import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function TeamExperts() {
  return (
    <section className="team-experts">
      <div className="team-experts-inner container">
        <div className="team-experts-inner-cont">
          <div className="team-experts-content" data-aos="fade-left">
            <h5>Our Team</h5>
            <h3>Team Experts</h3>
            <p>Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat libero. Suspendisse eleifend nibh quis dui placerat fermentum.n molestie nulla felis, vitae feugiat justo pulvinar et.</p>
            <Link className="btn" to="/">Join Our Team</Link>
          </div>
          <div className="team-experts-member">
            <div className="team-experts-member-item" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500">
              <div className="team-experts-member-photo">
                <img src="./img/team5.jpg" alt="team experts member" />
                <div className="team-experts-member-contact">
                  <a href="#"><span><FacebookIcon /></span></a>
                  <a href="#"><span><TwitterIcon /></span></a>
                </div>
              </div>
              <div className="team-experts-member-info">
                <h4>John Harris</h4>
                <h6>Boarding</h6>
              </div>
            </div>
            <div className="team-experts-member-item" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
              <div className="team-experts-member-photo">
                <img src="./img/team6.jpg" alt="team experts member" />
                <div className="team-experts-member-contact">
                  <a href="#"><span><FacebookIcon /></span></a>
                  <a href="#"><span><TwitterIcon /></span></a>
                </div>
              </div>
              <div className="team-experts-member-info">
                <h4>Scott Colon</h4>
                <h6>Boarding</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="team-experts-other-member">
            <div className="team-experts-member-item" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
              <div className="team-experts-member-photo">
                <img src="./img/team1.jpg" alt="team experts member" />
                <div className="team-experts-member-contact">
                  <a href="#"><span><FacebookIcon /></span></a>
                  <a href="#"><span><TwitterIcon /></span></a>
                </div>
              </div>
              <div className="team-experts-member-info">
                <h4>John Doe</h4>
                <h6>Boarding</h6>
              </div>
            </div>
            <div className="team-experts-member-item" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
              <div className="team-experts-member-photo">
                <img src="./img/team2.jpg" alt="team experts member" />
                <div className="team-experts-member-contact">
                  <a href="#"><span><FacebookIcon /></span></a>
                  <a href="#"><span><TwitterIcon /></span></a>
                </div>
              </div>
              <div className="team-experts-member-info">
                <h4>Alexander</h4>
                <h6>Training</h6>
              </div>
            </div>
            <div className="team-experts-member-item" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500">
              <div className="team-experts-member-photo">
                <img src="./img/team3.jpg" alt="team experts member" />
                <div className="team-experts-member-contact">
                  <a href="#"><span><FacebookIcon /></span></a>
                  <a href="#"><span><TwitterIcon /></span></a>
                </div>
              </div>
              <div className="team-experts-member-info">
                <h4>Martin Ker</h4>
                <h6>Boarding</h6>
              </div>
            </div>
            <div className="team-experts-member-item" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="500">
              <div className="team-experts-member-photo">
                <img src="./img/team4.jpg" alt="team experts member" />
                <div className="team-experts-member-contact">
                  <a href="#"><span><FacebookIcon /></span></a>
                  <a href="#"><span><TwitterIcon /></span></a>
                </div>
              </div>
              <div className="team-experts-member-info">
                <h4>Elizabeth</h4>
                <h6>Doggie Day Care</h6>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default TeamExperts
