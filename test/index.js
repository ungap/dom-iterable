
if (typeof global != 'undefined') {
  global.CSSRuleList = function () {};
  global.HTMLCollection = function () {};
  global.NodeList = function () {};
  global.StyleSheetList = function () {};
  global.NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];
}

require('../cjs');

console.assert(!!CSSRuleList.prototype[Symbol.iterator]);
console.assert(!!HTMLCollection.prototype[Symbol.iterator]);
console.assert(!!NodeList.prototype[Symbol.iterator]);
console.assert(!!StyleSheetList.prototype[Symbol.iterator]);
