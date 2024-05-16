import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint'
import ResumePDF from './../../assets/MuhammadSalarButtResume.pdf'
import './index.scss'

function Resume() {
  console.log(ResumePDF, 'testingggg')
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="contact-text-zone">
            <div className="topPart">
              <h1>
                <AnimatedLetters
                  letterClass={'text-animate'}
                  strArray={['R', 'E', 'S', 'U', 'M', 'E', '', ': ']}
                  idx={15}
                />
              </h1>
              <p className="para">
                Experienced frontend developer with a passion for ambitious
                projects and delivering exceptional user interfaces. Proficient
                in crafting intuitive designs and ready to collaborate on
                groundbreaking ventures. Contact me for inquiries.
              </p>

              <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="alpjaa">
                <p className="border">
                  Want to see resume click on this icon:
                  <FontAwesomeIcon icon={faPrint} className="iconi" />
                </p>
              </a>
            </div>

            <div className="contactInfo ">
              <h1>
                <AnimatedLetters
                  letterClass={'text-animate'}
                  strArray={[
                    'C',
                    'o',
                    'n',
                    't',
                    'a',
                    'c',
                    't',
                    ' ',
                    'I',
                    'n',
                    'f',
                    'o',
                    ':',
                  ]}
                  idx={13}
                />
              </h1>
              <div className="contactInfo__link">
                <FontAwesomeIcon
                  icon={faPhone}
                  color="#e7ab0a"
                  className="hoverr"
                />
                <a className="text-[5vw] md:text-2xl  moveee" target="blank">
                  (+92)323-6379199
                </a>
              </div>
              <div className="contactInfo__link">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#e7ab0a"
                  className="hoverr"
                />
                <a
                  className="text-[5vw] md:text-2xl moveee"
                  href="salarbutt321@gmail.com"
                  target="blank"
                >
                  salarbutt321@gmail.com
                </a>
              </div>
              <div className="contactInfo__link">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#e7ab0a"
                  className="hoverr"
                />
                <a
                  className="text-[5vw] md:text-2xl moveee"
                  href="https://www.linkedin.com/in/salar-butt/"
                  target="blank"
                >
                  https://www.linkedin.com/in/salar-butt/
                </a>
              </div>
              <div className="contactInfo__link">
                <FontAwesomeIcon
                  icon={faGithub}
                  color="#e7ab0a"
                  className="hoverr"
                />
                <a
                  className="text-[5vw] md:text-2xl moveee "
                  href="https://github.com/salar-butt"
                  target="blank"
                >
                  https://github.com/salar-butt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Resume
