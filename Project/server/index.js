const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

require('./src/services/mongoose');
require('./src/services/logger');

const routes = require('./src/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/dashboard', express.static(path.join(__dirname, '../admin-dashboard/build')));

app.use('/api/v1/', routes);

app.get('/dashboard/*', (_, res) => {
  res.sendFile(path.join(__dirname, '../admin-dashboard/build', 'index.html'));
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
});