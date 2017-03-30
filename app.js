const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
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

let address = encodeURIComponent(argv.address);
geocode.geocodeAddress(address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    // pretty print body as JSON with 2 spaces
    // console.log(JSON.stringify(results, undefined, 2));
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        // console.log(JSON.stringify(weatherResults, undefined, 2));
        console.log('---');
        console.log(`The temperature is ${celcius.convertFtoC(weatherResults.temperature)}c.`);
        console.log(`The temperature feels like ${celcius.convertFtoC(weatherResults.apparentTemperature)}c.`);
        console.log('---');
        console.log(`Powered by Dark Sky => https://darksky.net/poweredby/`);
      }
    });
  }
});
