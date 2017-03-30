const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

let address = encodeURIComponent(argv.address);
geocode.geocodeAddress(address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    // pretty print body as JSON with 2 spaces
    console.log(JSON.stringify(results, undefined, 2));
  }
});

// “Powered by Dark Sky” (linking to https://darksky.net/poweredby/
// weather.getWeather(lat, lng);
weather.getWeather(51.5033635,-0.1276248, (errorMessage, weatherResults) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(weatherResults, undefined, 2));
  }
});
