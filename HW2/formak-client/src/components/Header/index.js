import React from 'react';

import './index.css';

export default function Header() {
  return (
    <header className="top-header">
      <nav className="container top-header__navbar">
        <a className="top-header__title" href="/">
          Formak
        </a>

        <span>En/Fa</span>
      </nav>
    </header>
  )
}