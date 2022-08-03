import React from 'react'
// import navIcon1 from '../assets/img/nav-icon1.svg'
// import indeed from '../assets/img/indeed.svg'
// import navIcon3 from '../assets/img/nav-icon3.svg'
//import navIcon3 from '../assets/img/nav-icon3.svg'
import { MdEmail } from 'react-icons/md'
// import { SiIndeed } from 'react-icons/si'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className="social-icon">
      {/* <a href="https://my.indeed.com/resume?hl=en&co=IN&from=gnav-homepage&_ga=2.8511925.1007974570.1659279485-2141944777.1653542712&_gac=1.238862644.1659288020.EAIaIQobChMI7YGBsdGj-QIV2JlmAh19JA0ZEAAYASAAEgKdD_D_BwE">
        <SiIndeed />
        <span>indeed</span>
      </a> */}
      <a
        href="https://www.linkedin.com/in/akash-appanna-4a9411192/"
        target="_blank"
      >
        <BsLinkedin />
        <span>linkedin</span>
      </a>
      <a href="https://github.com/Akashappanna" target="_blank">
        <BsGithub />
        <span>Github</span>
      </a>
      <a href="mailto:akashappanna77@gmail.com">
        <MdEmail />
        <span>Mail</span>
      </a>
    </div>
  )
}

export default SocialLinks
