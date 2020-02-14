'use strict';

function test() {
  let elementParser = new ElementParser(document.querySelectorAll('img'));
  elementParser.getAttributes(console.log);
}

test();