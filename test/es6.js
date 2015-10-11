var detect = require('../')
var test = require('tape')

test('.class()', function (t) {
  t.strictEqual(detect.class(), true)
  t.end()
})
