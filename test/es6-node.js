var detect = require('../')
var test = require('tape')

test('.class()', function (t) {
  t.strictEqual(detect.class(), true)
  t.end()
})

test('.arrowFunction()', function (t) {
  t.strictEqual(detect.arrowFunction(), true)
  t.end()
})

test('.let()', function (t) {
  t.strictEqual(detect.let(), true)
  t.end()
})

test('.const()', function (t) {
  t.strictEqual(detect.const(), true)
  t.end()
})

test('.newArrayFeatures()', function (t) {
  t.strictEqual(detect.newArrayFeatures(), true)
  t.end()
})

test('.collections()', function (t) {
  t.strictEqual(detect.collections(), true)
  t.end()
})

test('.generators()', function (t) {
  t.strictEqual(detect.generators(), false)
  t.end()
})
