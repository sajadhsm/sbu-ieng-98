import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FormsTable from './FormsTable';

export default function Forms() {
  const [forms, setForms] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    axios
      .get('/forms/')
      .then(response => {
        setForms(response.data);
        setIsFetching(false);
      })
      .catch(error => {
        setIsFetching(false);
      });
  }, []);

  return (
    <>
      <FormsTable forms={forms} loading={isFetching} />
    </>
  )
}