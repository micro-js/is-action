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


test('should return false if action like', function (t) {
  t.equal(isAction({type: 'action', then: function () {}}), false)
  t.end()
})

test('should return false if no type', function (t) {
  t.equal(isAction({payload: 'foo'}), false)
  t.end()
})
