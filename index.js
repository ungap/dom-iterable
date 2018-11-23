/*! (c) Andrea Giammarchi - ISC */
// requires few globals classes + [][Symbol.iterator] + Object.defineProperty
(function (classes) {
  for (var
    proto,
    iterator = Symbol.iterator,
    value = classes[iterator],
    i = 0; i < classes.length; i++
  ) {
    proto = classes[i].prototype;
    if (!(iterator in proto))
      Object.defineProperty(proto, iterator, {
        configurable: true,
        writable: true,
        value: value
      });
  }
}([
  CSSRuleList,
  HTMLCollection,
  NodeList,
  StyleSheetList
]));
