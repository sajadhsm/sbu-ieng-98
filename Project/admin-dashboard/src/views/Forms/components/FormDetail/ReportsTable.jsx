import React from 'react';
import MaterialTable from 'material-table';
import { Box } from '@material-ui/core';

import Map from './Map';

export default function ReportsTable({ fields, reports }) {

  const columns = [
    { title: 'Create Date', field: 'createdAt', type: 'datetime' },
    ...fields.map(field => {
      const col = {
        title: `${field.name} ${field.required ? '*' : ''}`,
        field: field.name
      };

      if (field.type === 'location') {
        col.render = (rowData) => rowData[field.name].areas.toString()
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
        if (Array.isArray(value) && curr.areas) {
          value = {
            value,
            areas: curr.areas
          };
        }
        acc[curr.name] = value;
        return acc;
      }, {})
    }
  });

  function renderDetailPanel(rowData) {
    const locationFields = fields.filter(field => field.type === 'location').map(({ name, title }) => ({ name, title }));
    const locations = locationFields.map(({ name, title }) => ({
      name,
      title,
      value: rowData[name]
    }));


    return (
      <Box p={2}>
        {locations.map(location => (
          <div key={location.name}>
            <p><b>{location.title}</b> / <small>{location.name}</small></p>
            <Map coords={location.value.value} />
          </div>
        ))}
      </Box>
    )
  }

  return (
    <MaterialTable
      title="Reports"
      columns={columns}
      data={data}
      detailPanel={renderDetailPanel}
      options={{
        exportButton: true,
        exportFileName: "form_reports"
      }}
    />
  );
}