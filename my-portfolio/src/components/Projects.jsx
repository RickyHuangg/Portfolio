import { useState } from 'react';

// define software and hardware projects
const allProjects = {
  software: [
    {
  id: 'lockedLearn',
  title: 'LockedLearn',
  desc: 'Tracks time on YouTube, generates interval-based quizzes, and lets users upload PDF question banks to drive AI-generated practice questions.',
  repo: 'https://github.com/RickyHuangg/LearnLocked'
  },
  {
  id: 'therobot',
  title: 'Therobot',
  desc: 'An intent-based therapy chatbot built with TensorFlow and Python. It understands mental health queries and responds with supportive, research-backed guidance.',
  repo: 'https://github.com/RickyHuangg/Therobot'
  },
  {
  id: 'cppGame',
  title: 'Snake Treasure Hunt',
  desc: 'A C++ console game combining Snake and Wordle mechanics: navigate, collect treasures, and guess letters to win, with real-time score tracking.',
  repo: 'https://github.com/RickyHuangg/Snakey/tree/main/course-project-phama21-huangr86'
  }

  ],
  hardware: [
    {
      id: '3dScanner',
      title: '3D Scanner (2DX3 Final Project)',
      desc: 'Built a LiDAR-based room scanner that maps and visualizes 3D environments in real-time.',
      repo: 'https://github.com/RickyHuangg/Electronics-Projects/tree/main/Projects/3D%20Scanner/2DX3_Final_Project'
    },
    {
      id: 'amplifier',
      title: 'Audio Amplifier',
      desc: 'Designed a unity-gain common-collector amplifier with gm ≥ 0.99 S, using a 10 kΩ || 5 kΩ bias network and achieving <6% signal attenuation.',
      repo: 'https://github.com/RickyHuangg/Electronics-Projects/tree/main/Projects/Amplifier'
    },
    {
      id: 'cmosXor',
      title: 'CMOS XOR Gate',
      desc: 'Implemented a CMOS XOR logic gate at transistor level, verified logic functionality, and measured balanced propagation delays.',
      repo: 'https://github.com/RickyHuangg/Electronics-Projects/tree/main/Projects/CMOS%20XOR%20Gate'
    },
    {
      id: 'dcPowerSupply',
      title: 'DC Power Supply',
      desc: 'Built a center-tapped full-wave rectifier with 100 µF filter to deliver 3 V ± 0.1 V at 10 mA, minimizing ripple without Zener regulation.',
      repo: 'https://github.com/RickyHuangg/Electronics-Projects/tree/main/Projects/DC%20Power%20Supply'
    },
    {
      id: 'vcswitch',
      title: 'Voltage Controlled Switch',
      desc: 'Developed a MOSFET-based switch circuit that dynamically routes power rails based on control voltage thresholds.',
      repo: 'https://github.com/RickyHuangg/Electronics-Projects/tree/main/Projects/Voltage%20Controlled%20Switch'
    }
  ]
};

export default function Projects() {
  const [view, setView] = useState('software');
  const projects = allProjects[view];

  return (
    <section id="projects" className="projects-category">
      <h2>Projects</h2>
      <p className="section-subtitle">
        Here are some highlights of my software and hardware work—click into each to explore the codebases.
      </p>

      <div className="tabs">
        <button
          onClick={() => setView('software')}
          className={view === 'software' ? 'active' : ''}
        >
          Software
        </button>
        <button
          onClick={() => setView('hardware')}
          className={view === 'hardware' ? 'active' : ''}
        >
          Hardware
        </button>
      </div>

      <div className="grid">
        {projects.map((proj) => (
          <div key={proj.id} className="card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div style={{ textAlign: 'center', marginTop: 'var(--gap)' }}>
              <a href={proj.repo} className="view-repo-button">
                View Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
