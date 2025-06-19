// src/App.jsx
import { useState } from 'react';
import './App.css';
import Header   from './components/Header';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import Contact  from './components/Contact';

export default function App() {
  const [view, setView] = useState('home');

  const viewMap = {
    home:     <About    />,
    projects: <Projects />,
    contact:  <Contact  />
  };

  return (
    <main>
      <div className="container">
        <aside className="profile-card">
          <Hero />
        </aside>
        <section className="content-card">
          <Header active={view} onTabChange={setView} />
          {viewMap[view]}
        </section>
      </div>
    </main>
  );


  
}


