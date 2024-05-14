import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faProjectDiagram,
  faSmile,
  faPrint,
  faContactBook,

} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <span>Salar Butt <FontAwesomeIcon icon={faSmile} color="#ffd700" className='iconn' /> </span>
      
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faContactBook} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="resume-link"
        to="/resume"
      >
        <FontAwesomeIcon icon={faPrint} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
    <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/salar-butt"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/salar-butt/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href=""
        >
          <FontAwesomeIcon
            icon={faTelegram}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
     

    </ul>
  </div>
)

export default Sidebar
