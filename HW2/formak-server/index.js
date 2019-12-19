const express = require('express');
const path = require('path');

const db = require('./src/db');
const routes = require('./src/routes');
const { readJSONFileSync } = require('./src/utils');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/v1/', routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  // Load initial data into memory
  db.forms = readJSONFileSync('./src/initialData.json');
  console.log(`Listening on port ${PORT}...`);
});
