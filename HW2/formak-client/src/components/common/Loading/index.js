import React from 'react';

import './loading.css';

export default function Loading({ styles }) {
  return (
    <div className="loading" style={{ ...styles }}>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  )
}