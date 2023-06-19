const {fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log(`It didn't work!` , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIp('68.144.118.188', (error, coordinates) => {
//   if (error) {
//     console.log(`It didn't work!` , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', coordinates);
// });


const coordinates = {
  latitude: '-80',
  longitude: '-23'
};

fetchISSFlyOverTimes(coordinates, (error, passTimes) => {
  if (error) return console.log(`It didn't work!` , error);

  console.log(`It worked : Returned flyover times:`, passTimes);
});