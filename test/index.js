/**
 * Imports
 */

var isAction = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should return true for action', function (t) {
  t.equal(isAction({type: 'action', payload: 'foo'}), true)
  t.end()
})

test('should return false if not action', function (t) {
  t.equal(isAction({type: 'action', then: function () {}}), false)
  t.end()
})
