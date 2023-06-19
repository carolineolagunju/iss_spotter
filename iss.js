const request = require('request');


const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {

    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    
    //converting to structured obj && making the first args of the cb equate to null
    const data = JSON.parse(body);
    const ip = data.ip;
    callback(null, ip);
  });
};



const fetchCoordsByIp = (IP, callback) => {
  //requesting IP
  request(`http://ipwho.is/${IP}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    //converting to object && logging error message if success staus === false
    const data = JSON.parse(body);

    if (!data.success) {
      const msg = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP: ${data.ip}`;
      callback(msg, null);
      return;
    }

    //retrieving the latitude and longitude value as an object
    const result = {
      latitude: data.latitude,
      longitude: data.longitude
    };
  
    //calling cb function to print latitude and longitude
    callback(null, result);
  });
};



const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {

    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const message = `Status Code ${response.statusCode} when fetching ISS pass times: ${body}`;
      return callback(message, null);
    }

    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};

module.exports = {fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes};