'use strict'

/**
 * Detect which ES6 features are available.
 *
 * @module feature-detect-es6
 * @typicalname detect
 */

/**
 * Returns true if the `class` statement is available.
 *
 * @returns {boolean}
 */
exports.class = function () {
  try {
    eval('class Something {}')
    return true
  } catch (err) {
    return false
  }
}

/**
 * Returns true if the arrow functions available.
 *
 * @returns {boolean}
 */
exports.arrowFunction = function () {
  try {
    eval('var f = x => 1')
    return true
  } catch (err) {
    return false
  }
}
