'use strict';

class MyObject {
  constructor() {}

  updateMessage(message) {
    this.message = message;
  }

  method1() {
    this.updateMessage('first method');
    return this;
  }

  method2() {
    this.updateMessage('second method');
    return this;
  }

  method3() {
    this.updateMessage('third method');
    return this;
  }
}

function test() {
  let myObject = new MyObject();
  console.log(myObject.method1().method2().method3().message);
}

test();