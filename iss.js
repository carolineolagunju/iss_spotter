const request = require('request');
const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    const data = JSON.parse(body);
    const ip = data;
    callback(null, ip);
  });
};

module.exports = {fetchMyIP};