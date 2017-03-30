const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=10%20downing%20street%20london',
  json: true
}, (error, response, body) => {
  console.log(body);
});
