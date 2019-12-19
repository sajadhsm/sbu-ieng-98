import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <h1 className="hero__title">{t('common.title')}</h1>
      <p className="hero__subtitle">{t('common.description')}</p>
    </section>
  )
}

export default Hero;