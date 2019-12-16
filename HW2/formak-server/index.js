const express = require('express');
const cors = require('cors');

const db = require('./src/db');
const routes = require('./src/routes');
const { readJSONFileSync } = require('./src/utils');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  // Load initial data into memory
  db.forms = readJSONFileSync('./src/initialData.json');
  console.log(`Listening on port ${PORT}...`);
});
