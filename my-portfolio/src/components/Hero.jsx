// src/components/Hero.jsx
import photo from '../assets/pfp.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Ricky Huang</h1>
        <span className="role">Software Developer</span>
      </div>
      <div className="hero-image">
        <img src={photo} alt="Ricky Huang" />
      </div>

      <ul className="contact-list">
        <li>
          <AiOutlineMail className="icon" />
          <div>
            <div className="label">Email</div>
            <span>Rhruan2@gmail.com</span>
          </div>
        </li>
        <li>
          <FiPhone className="icon" />
          <div>
            <div className="label">Phone</div>
            <span>905-226-3777</span>
          </div>
        </li>
        <li>
          <GoLocation className="icon" />
          <div>
            <div className="label">Location</div>
            <span>Toronto, Ontario</span>
          </div>
        </li>
      </ul>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/ricky-huang-20010523b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/RickyHuangg" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
