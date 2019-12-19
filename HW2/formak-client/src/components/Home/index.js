import React, { useEffect, useState } from 'react';

import Hero from './Hero'
import LatestForms from './LatestForms'

import './index.css';

function Home() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch('/api/v1/forms/')
      .then(res => res.json())
      .then(data => {
        setForms(data.forms);
      });
  }, []);

  return (
    <div className="container">
      <Hero />
      <LatestForms forms={forms} />
    </div>
  )
}

export default Home;