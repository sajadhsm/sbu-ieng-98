import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FormCards({ forms }) {
  const { t } = useTranslation();

  return (
    <div className="form-cards">
      {forms.map(({ id, title }) => (
        <Link className="form-card" key={id} to={`form/${id}`}>
          <h3>{title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default FormCards;