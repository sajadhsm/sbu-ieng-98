import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="top-header">
      <nav className="container top-header__navbar">
        <a className="top-header__title" href="/">
          {t('common.title')}
        </a>

        <div>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => i18n.changeLanguage('fa')}>فا</button>
        </div>
      </nav>
    </header>
  )
}