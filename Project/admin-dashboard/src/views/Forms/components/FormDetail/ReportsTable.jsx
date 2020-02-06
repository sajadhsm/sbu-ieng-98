import React from 'react';
import MaterialTable from 'material-table';

export default function ReportsTable({ fields, reports }) {

  const columns = [
    { title: 'Create Date', field: 'createdAt', type: 'datetime' },
    ...fields.map(field => {
      return {
        title: `${field.name} ${field.required ? '*' : ''}`,
        field: field.name
      }
    })
  ];

  const data = reports.map(({ _id, createdAt, responses }) => {
    return {
      id: _id,
      createdAt,
      ...responses.reduce((acc, curr) => {
        acc[curr.name] = curr.value;
        return acc;
      }, {})
    }
  });

  return (
    <MaterialTable
      title="Reports"
      columns={columns}
      data={data}
      options={{
        search: false
      }}
    />
  );
}