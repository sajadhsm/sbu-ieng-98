import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/forms/')
      .then(res => res.json())
      .then(data => {
        setForms(data.forms);
      });
  }, []);

  return (
    <div>
      <h1>Formak</h1>

      <ul>
        {forms.map(({ id, title }) => (
          <li key={id}>
            <Link to={`form/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;