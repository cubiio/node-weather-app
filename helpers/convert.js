function convertFtoC(tempF) {
  let c = 5/9 * (tempF - 32);
  return Math.floor(c);
}

module.exports = {
  convertFtoC
}
