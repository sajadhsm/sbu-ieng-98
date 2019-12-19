import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LatestForms({ forms }) {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="latest-forms-title">{t("common.latestForms")}</h2>

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