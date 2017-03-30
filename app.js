const request = require('request');
const yargs = require('yargs');

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

// console.log(argv);

// let address = argv.address;
// console.log(address);
let URIaddress = encodeURIComponent(argv.address);
// console.log(URIaddress);
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${URIaddress}`;

request({
  url: url,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  const geo = body.results[0].geometry.location;
  console.log(`Lat: ${geo.lat} Lng: ${geo.lng}`);
});
