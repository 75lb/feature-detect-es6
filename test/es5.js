var detect = require('../')
var test = require('tape')

test('.class()', function (t) {
  t.strictEqual(detect.class(), false)
  t.end()
})

test('.arrowFunction()', function (t) {
  t.strictEqual(detect.arrowFunction(), false)
  t.end()
})

test('.let()', function (t) {
  t.strictEqual(detect.let(), false)
  t.end()
})

test('.const()', function (t) {
  t.strictEqual(detect.const(), false)
  t.end()
})

test('.newArrayFeatures()', function (t) {
  t.strictEqual(detect.newArrayFeatures(), false)
  t.end()
})
