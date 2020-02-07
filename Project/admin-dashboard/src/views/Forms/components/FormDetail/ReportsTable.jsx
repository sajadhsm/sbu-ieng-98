import React from 'react';
import MaterialTable from 'material-table';

export default function ReportsTable({ fields, reports }) {

  const columns = [
    { title: 'Create Date', field: 'createdAt', type: 'datetime' },
    ...fields.map(field => {
      const col = {
        title: `${field.name} ${field.required ? '*' : ''}`,
        field: field.name
      };

      if (field.type === 'location') {
        col.render = (rowData) => rowData[field.name].toString()
      }

      return col;
    })
  ];
  const data = reports.map(({ _id, createdAt, responses }) => {
    return {
      id: _id,
      createdAt,
      ...responses.reduce((acc, curr) => {
        let value = curr.value;
        if (Array.isArray(value)) {
          value = curr.areas;
        }
        acc[curr.name] = value;
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