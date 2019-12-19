import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import direction from '../../i18n/direction';

function LanguageSelect() {
  const [lang, setLang] = useState(localStorage.getItem('language') || 'en');
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    const language = e.target.value;
    setLang(language);
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang, dir: direction[lang] }} />

      <select className="language-select" value={lang} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select>
    </>
  )
}

export default LanguageSelect;