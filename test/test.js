if (process.env.VERSION === 'node') {
  console.log('Running node tests')
  require('./es6-node')
} else if (process.env.VERSION === 'iojs') {
  console.log('Running iojs tests')
  require('./es6-iojs')
} else if (process.env.VERSION === '0.12') {
  console.log('Running es5-0.12 tests')
  require('./es5-0.12')
} else {
  console.log('Running es5-0.10 tests')
  require('./es5-0.10')
}
