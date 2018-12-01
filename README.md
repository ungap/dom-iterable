# DOM Iterable

[![Build Status](https://travis-ci.com/ungap/dom-iterable.svg?branch=master)](https://travis-ci.com/ungap/dom-iterable) [![Coverage Status](https://coveralls.io/repos/github/ungap/dom-iterable/badge.svg?branch=master)](https://coveralls.io/github/ungap/dom-iterable?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/ungap/dom-iterable.svg)](https://greenkeeper.io/) ![WebReflection status](https://offline.report/status/webreflection.svg)

Ensuring common iterable DOM classes can be used in for/of loops.

```js
// works from Chrome 51 on, not before
for (const node of document.querySelectorAll('*'))
  console.log(node);
```

  * CDN via https://unpkg.com/@ungap/dom-iterable
  * ESM via `import iterator from '@ungap/dom-iterable'`
  * CJS via `const iterator = require('@ungap/dom-iterable')`

[Live test](https://ungap.github.io/dom-iterable/test/)
