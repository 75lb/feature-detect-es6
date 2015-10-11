if (process.env.VERSION === 'node') {
  console.log('Running node tests')
  require('./es6-node')
} else if (process.env.VERSION === 'iojs') {
    console.log('Running iojs tests')
    require('./es6-iojs')
  } else {
} else {
  console.log('Running ES5 tests')
  require('./es5')
}
