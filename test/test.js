if (process.env.VERSION === 'node' || process.env.VERSION === 'iojs') {
  console.log('Running ES6 tests')
  require('./es6')
} else {
  console.log('Running ES5 tests')
  require('./es5')
}
