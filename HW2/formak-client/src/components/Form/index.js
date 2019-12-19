import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import FieldOfType from './FieldOfType';

import './index.css';

function Form() {
  const { id } = useParams();
  const { t } = useTranslation();

  const [form, setForm] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch(`/api/v1/forms/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          ...data.form,
          controls: data.form.fields.reduce((acc, cur) => {
            acc[cur.name] = ""
            return acc
          }, {})
        });
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Validation
    fetch(`/api/v1/forms/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.controls)
    })
      .then(res => res.json())
      .then(() => {
        // TODO: Handle submittion error
        setIsSubmitted(true);
      })
  }

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      controls: {
        ...form.controls,
        [name]: value
      }
    })
  }

  const handleMapFieldChange = (name, locations) => {
    setForm({
      ...form,
      controls: {
        ...form.controls,
        [name]: locations
      }
    })
  };

  if (!form) {
    return <p style={{ textAlign: 'center' }}>{t('common.loading')}</p>
  }

  if (isSubmitted) {
    return (
      <div className="sucess-submission">
        <p className="sucess-submission__message">
          {t('form.successSubmitMessage')}
        </p>
        <Link className="sucess-submission__link" to="/">
          {t('common.formsList')}
        </Link>
      </div>
    )
  }

  return (
    <div className="container">
      <Helmet>
        <title>{t('common.title')} - {form.title}</title>
      </Helmet>

      <form className="form form--small" onSubmit={handleFormSubmit}>
        <h1 className="form__title">{form.title}</h1>
        {form.fields.map(field => {
          const onChange = field.type === "Location" ? handleMapFieldChange : handleFieldChange;

          return (
            <div className="form__field" key={field.title}>
              {renderField(field, form.controls[field.name], onChange)}
            </div>
          )
        })}

        <button type="submit" className="form__submit-btn">{t('common.submit')}</button>
      </form>
    </div>
  )
}

function renderField(field, value, handleChange) {
  return (
    <>
      <label htmlFor={field.name}>{field.title}</label>
      <FieldOfType
        field={field}
        value={value}
        handleChange={handleChange} />
    </>
  );
}

export default Form;