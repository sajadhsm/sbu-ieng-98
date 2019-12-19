import React from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSelect from './LanguageSelect';

import './index.css';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="top-header">
      <nav className="container top-header__navbar">
        <a className="top-header__title" href="/">
          {t('common.title')}
        </a>

        <LanguageSelect />
      </nav>
    </header>
  )
}