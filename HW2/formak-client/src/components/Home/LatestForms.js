import React from 'react';
import { Link } from 'react-router-dom';

function LatestForms({ forms }) {
  return (
    <section>
      <h2 className="latest-forms-title">Latest Forms</h2>

      <div className="latest-forms">
        {forms.map(({ id, title }) => (
          <Link className="form-card" key={id} to={`form/${id}`}>
            <h3>{title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default LatestForms;