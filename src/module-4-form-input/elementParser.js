'use strict';

class ElementParser {
  constructor(selector) {
    this.selector = selector;
  }

  getAttributes(outputAction) {
    this.selector.forEach(e => outputAction(e.attributes));
  }
}
