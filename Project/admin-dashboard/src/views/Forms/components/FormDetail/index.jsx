import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import Breadcrumbs from '../../../../shared/components/Breadcrumbs';
import Detail from './Detail';
import ReportsTable from './ReportsTable';

export default function FormDetail() {
  const { formId } = useParams();
  const [data, setData] = useState({
    form: null,
    reports: []
  });
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`/forms/${formId}`)
      .then(({ data: form }) => {
        axios
          .get(`/reports/${formId}`)
          .then(({ data: reports }) => {
            setData({
              form,
              reports
            });
            setIsFetching(false);
          })
          .catch(error => {
            setIsFetching(false);
          });
      })
      .catch(error => {
        setIsFetching(false);
      });

  }, [formId]);

  if (isFetching) {
    return <p>LOADING...</p>
  }

  const bcItems = [
    { text: "Dashboard", path: "/" },
    { text: "Forms", path: "/forms" },
    { text: "Form Detail" }
  ];

  const { form, reports } = data;
  return (
    <>
      <Breadcrumbs items={bcItems} />

      <Detail form={form} />
      <ReportsTable fields={form.fields} reports={reports} />
    </>
  )
}