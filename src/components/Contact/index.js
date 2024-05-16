import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="contact-text-zone">
            <div className="topPart ">
              <h1>
                <AnimatedLetters
                  letterClass={'text-animate'}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p className=''>
                As a seasoned frontend developer, I'm eager to tackle freelance
                opportunities, especially ambitious projects. With a focus on
                crafting intuitive user interfaces, I excel in delivering
                top-tier results. Whether it's a groundbreaking venture or
                ongoing project, I'm ready to collaborate. Contact me via the
                form below for inquiries.
              </p>
            </div>

            <div className="contactInfo">
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
                <FontAwesomeIcon icon={faPhone} color="#e7ab0a" />
                <a
                  className="text-[5vw] md:text-2xl  moveee"
                  href="https://wa.me/+923236379199"
                  target="_blank"
                >
                  (+92)323-6379199
                </a>
              </div>
              <div className="contactInfo__link">
                <FontAwesomeIcon icon={faEnvelope} color="#e7ab0a" />
                <a
                  className="text-[5vw] md:text-2xl moveee"
                  href="mailto:salarbutt321@gmail.com"
                  target="_blank"
                >
                  salarbutt321@gmail.com
                </a>
              </div>
              <div className="contactInfo__link">
                <FontAwesomeIcon icon={faLinkedin} color="#e7ab0a" />
                <a
                  className="text-[5vw] md:text-2xl moveee"
                  href="https://www.linkedin.com/in/salar-butt/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/salar-butt/
                </a>
              </div>
              <div className="contactInfo__link">
                <FontAwesomeIcon icon={faGithub} color="#e7ab0a" />
                <a
                  className="text-[5vw] md:text-2xl moveee"
                  href="https://github.com/salar-butt"
                  target="_blank"
                >
                  https://github.com/salar-butt
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form action='https://formsubmit.co/el/confirm/9a9232895110b73b721f89de43706797' method='POST'>
              <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
              <input type="hidden" name="_subject" value="New submission from your website!" />
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button">Send</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
