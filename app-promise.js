const yargs = require('yargs');
const axios = require('axios');

const celcius = require('./helpers/convert');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Fetch weather for this address',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.')
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/c9ef245f82717baa8be804cab471c6f2/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log('---');
    console.log(`The temperature is ${celcius.convertFtoC(temperature)}c.`);
    console.log(`The temperature feels like ${celcius.convertFtoC(apparentTemperature)}c.`);
    console.log('---');
    console.log(`Powered by Dark Sky => https://darksky.net/poweredby/`);
  })
  .catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect');
    } else {
      console.log(e.message);
    }
  });
