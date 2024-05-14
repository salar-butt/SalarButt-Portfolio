import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';
import img1 from './Logo/img1.jpg'; // Import the image file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import music from "../../assets/music2.mp3"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const nameArray = [' ', 'S', 'a', 'l', 'a', 'r', '.', 'B', 'u', 't', 't'];
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  useEffect(() => {
    const audio = document.getElementById('bg-music');
    if (isMusicPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    setIsMusicPlaying(prevState => !prevState);
  };

  return (
    <div className="container home-page">
      <div className="music-toggle" id="music-toggle">
        <a id="toggle" style={{fontSize:"16px"}} onClick={toggleMusic}>
          {isMusicPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          {isMusicPlaying ? 'Stop Music' : 'Play Music'}
        </a>
      </div>
      <audio id="bg-music" loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _12`}>!</span>, <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span className={`${letterClass} _12`}>:</span>
          <div className='rounddd'>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <img className='round' src={img1} alt='img'></img>
          </div>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>Frontend Developer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo />
      <div className="whatsapp-fixed">
      
      </div>
      <Loader type='pacman' />
    </div>
  );
}

export default Home;
