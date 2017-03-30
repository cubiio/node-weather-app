# Weather App (CLI)
This is a simple command line interface weather app, built with Node.js.

The user enters an address or location, and the app returns the location and the temperature at the location. 

I built this app following [The Complete Node.js Developer Course (2nd Edition)](https://www.udemy.com/the-complete-nodejs-developer-course-2) on Udemy.


## Set-up

Clone or download the repo to a local machine and your project folder. 

To run the application, Node.js needs to be installed. If you don’t have Node.js installed, then go ahead and install it (see available downloads [here](https://nodejs.org/en/download/).

To install dependencies, run `npm install` from your project folder.

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
$ node app.js -a “vancouver”
Vancouver, BC, Canada
---
The temperature is 4c.
The temperature feels like 2c.
---
Powered by Dark Sky => https://darksky.net/poweredby/
```

For help, run this command:

```bash
$ node app.js -h
```
