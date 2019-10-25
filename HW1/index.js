const express = require('express');

const db = require('./src/db');
const routes = require('./src/routes');
const { readJSONFileSync } = require('./src/utils');

const PORT = process.env.port || 3000;

const app = express();
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  // Load initial data into memory
  db.data = readJSONFileSync('./src/initialData.json');
  console.log(`Listening on port ${PORT}...`);
});
