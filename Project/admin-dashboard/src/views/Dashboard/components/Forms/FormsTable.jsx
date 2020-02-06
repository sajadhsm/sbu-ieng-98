import React from 'react';
import MaterialTable from 'material-table';

export default function FormsTable({ forms, loading }) {
  const columns = [
    { title: 'title', field: 'title' },
    { title: 'Create Date', field: 'createdAt', type: 'datetime' },
    { title: 'Fields', field: 'fields', type: 'numeric' }
  ];

  const data = forms.map(({ _id, title, createdAt, fields }) => {
    return {
      id: _id,
      title,
      createdAt,
      fields: fields.length
    }
  });

  return (
    <MaterialTable
      title="Forms"
      columns={columns}
      data={data}
      isLoading={loading}
    />
  );
}