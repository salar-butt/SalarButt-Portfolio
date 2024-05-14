import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import Loader from 'react-loaders'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', "!"]}
              idx={15}
            />
          </h1>
          <p>
          As a dedicated MERN stack developer with a specialization in frontend development, I bring a wealth of expertise to the table. Proficient in HTML, CSS (including Tailwind CSS), JavaScript, and frameworks such as React, Redux, and RTK-Query, I am committed to crafting user-friendly interfaces that seamlessly blend creativity with meticulous attention to detail. My passion lies in delivering solutions that not only meet but exceed user expectations, ensuring a smooth and engaging experience across all platforms.
          </p>
          <p align="LEFT">
            With a commitment to high-quality and user-centric solutions, I
            thrive in collaborative environments. Eager to contribute my skills
            to a forward-thinking team, I am dedicated to continuous learning
            and staying updated on industry trends.
          </p>
          
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd91d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} color="#dd0031" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
