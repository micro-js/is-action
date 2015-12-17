
# is-action

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if standard action.

## Installation

    $ npm install @f/is-action

## Usage

```js
var isAction = require('@f/is-action')

isAction({type: 'action', payload: 'foo'}) // => true
```

## API

### isAction(obj)

- `obj` - `obj` to test if action

**Returns:** boolean indicating whether `obj` is action

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/is-action.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/is-action
[git-image]: https://img.shields.io/github/tag/micro-js/is-action.svg
[git-url]: https://github.com/micro-js/is-action
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/is-action.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/is-action
