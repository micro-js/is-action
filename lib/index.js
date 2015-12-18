/**
 * Modules
 */

var isObject = require('@f/is-object')
var isUndefined = require('@f/is-undefined')

/**
 * Vars
 */

 var validKeys = [
   'type',
   'payload',
   'error',
   'meta'
 ]

/**
 * Expose isAction
 */

module.exports = isAction['default'] = isAction

/**
 * Check if `action` is standard action.
 * @param  {Object}  action
 * @param  {Boolean}  strict Set to true if `type` and `payload` are required and no additional keys are allowed.
 * @return {Boolean}
 */

function isAction (action) {
  return isObject(action) &&
    !isUndefined(action.type) &&
    Object.keys(action).every(isValidKey)
}

/**
 * Check if key is valid action key
 * @param  {String}  key
 * @return {Boolean}
 */

function isValidKey(key) {
  return validKeys.indexOf(key) > -1
}
