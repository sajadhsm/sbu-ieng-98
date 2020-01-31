const express = require('express');
const path = require('path');
require('dotenv').config();

require('./src/services/mongoose');
require('./src/services/logger');

const routes = require('./src/routes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/v1/', routes);

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
});