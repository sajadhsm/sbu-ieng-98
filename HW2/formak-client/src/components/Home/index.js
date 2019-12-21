import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Hero from './Hero'
import LatestForms from './LatestForms/index'

import './index.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Helmet>
        <title>{t('common.title')}</title>
      </Helmet>

      <Hero />

      <LatestForms />
    </div>
  )
}

export default Home;