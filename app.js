const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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
geocode.geocodeAddress(address);
