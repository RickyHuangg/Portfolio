// src/components/About.jsx
import reactIcon      from '../assets/react.svg';
import jsIcon         from '../assets/javascript.svg';
import cppIcon        from '../assets/cplusplus.svg';
import pythonIcon     from '../assets/python.svg';
import cssIcon        from '../assets/css.svg';
import nodeIcon       from '../assets/nodedotjs.svg';
import gitIcon        from '../assets/git.svg';
import cIcon          from '../assets/c.svg';

export default function About() {
  const whatCards = [
    {
      title: 'Student at McMaster',
      description: 'Pursuing a Bachelor of Engineering in Computer Engineering. Deepening my understanding of embedded systems, digital logic, signal processing, and hardware–software integration through hands-on labs and team projects.'
    },
    {
      title: 'Hardware Projects',
      description: 'Designing and prototyping microcontroller-based systems: sensor integration, PCB layout, and real-time data acquisition. Projects include IMU gesture controllers, Robosub vision modules, and custom motor drivers.'
    },
    {
      title: 'Software Development',
      description: 'Building scalable backend services and automation tools with Node.js, Python, and MongoDB. Implementing RESTful APIs, automated testing, CI/CD pipelines, and performance optimization for data-driven applications.'
    },
    {
      title: 'Web Development',
      description: 'Crafting modern, responsive web apps using React, Vite, and Tailwind CSS. Developing Chrome extensions to enhance workflow, focusing on performance, accessibility, and clean UX/UI design.'
    }
  ];

  const skills = [
    { icon: reactIcon,  label: 'React'      },
    { icon: jsIcon,     label: 'JavaScript' },
    { icon: cppIcon,    label: 'C / C++'    },
    { icon: pythonIcon, label: 'Python'     },
    { icon: cssIcon,    label: 'CSS'        },
    { icon: nodeIcon,   label: 'Node.js'    },
    { icon: gitIcon,    label: 'Git'        },
    { icon: cIcon,      label: 'C'          }
  ];

  return (
    <section id="about">
      <h2>About Me</h2>
      <p className="section-subtitle">
        As a third-year Computer Engineering student at McMaster University, I blend rigorous theory in microelectronics, signal processing, and embedded software with hands‑on projects—from LiDAR‑based 3D mapping to end‑to‑end web applications—delivering solutions that connect hardware, code, and user experience seamlessly.
      </p>

      <h3>What I’m Doing</h3>
      <div className="what-grid">
        {whatCards.map(({ title, description }) => (
          <div className="what-card" key={title}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>

      <h3>Skills</h3>
      <div className="skills-grid">
        {skills.map(({ icon, label }) => (
          <div className="skill-item" key={label}>
            <img src={icon} alt={label} className="skill-icon" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
