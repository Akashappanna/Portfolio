import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import arrow1 from '../assets/img/arrow1.svg'
import arrow2 from '../assets/img/arrow2.svg'
import colorSharp from '../assets/img/color-sharp.png'
import nextjs from '../assets/img/next-js.svg'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faJsSquare,
  faPython,
  faReact,
  faVnv,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I'm very ambitious front-end developer looking for a role in
                established IT company with the opportunity to work with the
                latest technologies on challenging and diverse projects.
                <br></br>{' '}
              </p>

              <div className="stage-cube-cont">
                <div className="cubespinner">
                  <div className="face1">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                  </div>
                  <div className="face2">
                    <FontAwesomeIcon icon={faCss3} color="#F06529" />
                  </div>
                  <div className="face3">
                    <FontAwesomeIcon icon={faJs} color="#28A4D9" />
                  </div>
                  <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                  </div>
                  <div className="face5">
                    {/* <FontAwesomeIcon icon={faVnv} color="#EFD81D" /> */}
                    <img src={nextjs} style={{ width: '50%' }} alt="newimage" />
                  </div>
                  <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                  </div>
                </div>
              </div>

              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
