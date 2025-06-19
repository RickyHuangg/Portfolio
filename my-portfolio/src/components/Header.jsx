// src/components/Header.jsx
import React from 'react';

const navItems = [
  { id: 'home',     label: 'Home'     },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact'  }
];

export default function Header({ active, onTabChange }) {
  return (
    <header>
      <nav>
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            className={active === id ? 'active' : ''}
            onClick={() => onTabChange(id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
