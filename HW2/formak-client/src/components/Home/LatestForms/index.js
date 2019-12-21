import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import FormCards from './FormCards'
import Loading from '../../common/Loading'

import '../index.css';

function LatestForms() {
  const [state, setState] = useState({
    forms: [],
    isFetching: true
  });
  const { t } = useTranslation();

  useEffect(() => {
    fetch('/api/v1/forms/')
      .then(res => res.json())
      .then(data => {
        setState(() => ({
          forms: data.forms,
          isFetching: false
        }));
      })
      .catch(() => {
        setState(state => ({
          ...state,
          isFetching: false
        }))
      })
  }, []);

  const { forms, isFetching } = state;
  return (
    <section>
      <h2 className="latest-forms-title">{t("common.latestForms")}</h2>

      {isFetching ?
        <Loading styles={{ margin: '25px auto' }} /> :
        <FormCards forms={forms} />
      }
    </section>
  )
}

export default LatestForms;