import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSelect from './LanguageSelect';

import './index.css';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="top-header">
      <nav className="container top-header__navbar">
        <Link className="top-header__title" to="/">
          {t('common.title')}
        </Link>

        <LanguageSelect />
      </nav>
    </header>
  )
}