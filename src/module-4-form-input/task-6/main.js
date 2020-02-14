'use strict';

function test() {
  let elementParser = new ElementParser(document.querySelectorAll('form'));
  elementParser.getAttributes(console.log);
}

test();