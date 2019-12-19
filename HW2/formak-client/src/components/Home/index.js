import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Hero from './Hero'
import LatestForms from './LatestForms'

import './index.css';
import { useTranslation } from 'react-i18next';

function Home() {
  const [forms, setForms] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('/api/v1/forms/')
      .then(res => res.json())
      .then(data => {
        setForms(data.forms);
      });
  }, []);

  return (
    <div className="container">
      <Helmet>
        <title>{t('common.title')}</title>
      </Helmet>
      <Hero />
      <LatestForms forms={forms} />
    </div>
  )
}

export default Home;