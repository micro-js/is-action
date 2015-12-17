/**
 * Modules
 */

var isObject = require('@f/is-object')

/**
 * Expose isAction
 */

module.exports = isAction['default'] = isAction

/**
 * isAction
 */

function isAction (val) {
  return isObject(val) && val.hasOwnProperty('type') && val.hasOwnProperty('payload')
}
