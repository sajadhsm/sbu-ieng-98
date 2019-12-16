const fs = require('fs');

module.exports = {
  readJSONFileSync: (path) => {
    const rawData = fs.readFileSync(path);
    return JSON.parse(rawData);
  }
};
