import React from 'react';
import MaterialTable from 'material-table';
import { Box, Grid, Paper, Typography } from '@material-ui/core';

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

  const numberFields = fields
    .filter(field => field.type === "number")
    .map(({ name, title }) => ({ name, title }));

  const numberData = numberFields.reduce((acc, curr) => {
    const total = data.reduce((sum, row) => {
      sum += Number(row[curr.name]);
      return sum;
    }, 0);

    acc[curr.name] = total;
    return acc;
  }, {});

  console.log(numberData);

  return (
    <Paper>
      <MaterialTable
        title="Reports"
        columns={columns}
        data={data}
        detailPanel={renderDetailPanel}
        options={{
          exportButton: true,
          exportFileName: "form_reports"
        }}
        style={{ boxShadow: 'none' }}
      />

      <Box p={2}>
        <Typography variant="h5" component="p" gutterBottom>
          Summary:
        </Typography>

        <Grid container justify="space-between">
          {
            Object.keys(numberData).map(key => (
              <Grid item key={key}>
                <Typography variant="h6" component="p" gutterBottom>
                  <b>{key}:</b> {numberData[key]}
                </Typography>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Paper>
  );
}