# Weather App (CLI)
This is a simple command line interface weather app, built with Node.js.

The user enters an address or location, and the app returns the location and the temperature at the location. 

I built this app following [The Complete Node.js Developer Course (2nd Edition)](https://www.udemy.com/the-complete-nodejs-developer-course-2) on Udemy.


## Set-up

Clone or download the repo to a local machine and your project folder. 

To run the application, Node.js needs to be installed. If you don’t have Node.js installed, then go ahead and install it - see available downloads [here](https://nodejs.org/en/download/).

To install dependencies, run `npm install` in the Terminal from the root of your project folder. This assumes you have cloned / downloaded the repo and have the `package.json` file. NPM will install the dependencies named in this file. 

## Run

To run the app, open your Terminal/Shell and navigate to the project folder. Then run the app as follows:

```bash
$ node app.js -a "<address or location>"
```

For example:

```bash
$ node app.js -a “london”
London, UK
---
The temperature is 19c.
The temperature feels like 19c.
---
Powered by Dark Sky => https://darksky.net/poweredby/
```

And another example:

```bash
$ node app.js --address “vancouver”
Vancouver, BC, Canada
---
The temperature is 4c.
The temperature feels like 2c.
---
Powered by Dark Sky => https://darksky.net/poweredby/
```

And one last example:

```bash
$ node app.js -a berlin
Berlin, Germany
---
The temperature is 15c.
The temperature feels like 15c.
---
```

For help, run this command:

```bash
$ node app.js -h
```

***

## Alternatively…

The file `app-promise.js` has the exact functionality but is in one file (plus the use of the helper function to convert fahrenheit to celsius). 

It uses [Axios](https://www.npmjs.com/package/axios) and ES6 Promises to deliver the same functionality.

To run:

```bash
$ node app-promise.js -a “london”
London, UK
---
The temperature is 19c.
The temperature feels like 19c.
---
Powered by Dark Sky => https://darksky.net/poweredby/
```
