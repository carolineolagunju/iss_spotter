const request = require('request');


const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {

    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    
    const data = JSON.parse(body);
    const ip = data.ip;
    callback(null, ip);
  });
};

module.exports = {fetchMyIP};