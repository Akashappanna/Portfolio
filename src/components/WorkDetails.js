import React from 'react'
import colorSharp from '../assets/img/color-sharp.png'
import { Projects } from './Projects'
// import img1 from '../assets/img/Gpcf.png'
import img1 from '../assets/img/project-img1.png'
import img2 from '../assets/img/project-img2.png'
import img3 from '../assets/img/project-img3.png'
import resume from '../assets/resume/Resume_1.pdf'
import { Link } from 'react-router-dom'
import { FaCloudDownloadAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Global Prostate Cancer Foundation',
    description: 'Development',
    imgUrl: img1,
    demo: false,
  },
  {
    title: 'Gottat get',
    description: 'front end Development',
    imgUrl: img2,
    demo: false,
  },
  {
    title: 'Octaverse',
    description: 'Development',
    imgUrl: img3,
    demo: false,
  },
  {
    title: 'Dropouts',
    description: 'Design & Development',
    imgUrl: img1,
    demo: false,
  },
]

const WorkDetails = () => {
  return (
    <section className="work-experience" id="work-exp">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="work-detail">
              <div style={{ width: '50%' }}>
                {' '}
                <h2>
                  Company : <span className="company">Obbe Innovators</span>
                </h2>
                <ul className="work-info">
                  <li>Role : Jr Front-end Developer</li>
                  <li>
                    <span className="t-details">From</span> : Feb 2020 &nbsp;
                    &nbsp;
                    <span className="t-details">To</span> : May 2022
                  </li>
                  <li>Overall Exp : 2.3 years</li>
                </ul>
              </div>

              <div style={{ width: '50%' }}>
                <h3>Skills</h3>
                <div className="skills-display">
                  <ul className="skills-info">
                    <li>Html5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                  </ul>
                  <ul className="skills-info">
                    <li>Next js</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>Python</li>
                    <li>Git</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume">
              <Link to={resume} target="_blank" download>
                <span>Resume</span>
                <FaCloudDownloadAlt size={38} className="download-icon" />
              </Link>
            </div>
            {/* <Projects isdescrp={true} projects={projects} /> */}
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
export default WorkDetails
