const request = require('request');

const geocodeAddress = (address) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
  }, (error, response, body) => {
    // pretty print body as JSON with 2 spaces
    // console.log(JSON.stringify(body, undefined, 2));
    if (error) {
      console.log('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find that address.');
    } else if (body.status === 'OK') {
      console.log(`Address: ${body.results[0].formatted_address}`);
      const geo = body.results[0].geometry.location;
      console.log(`Lat: ${geo.lat} Lng: ${geo.lng}`);
    }
  });
};

module.exports = {
  geocodeAddress
};
