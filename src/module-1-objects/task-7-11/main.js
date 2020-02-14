'use strict';

function test() {
  // First task.
  let d1 = [45, 78, 10, 3];
  d1[7] = 100;
  console.log(`d1: ${d1}`);
  console.log(`d1[6]: ${d1[6]}`);
  console.log(`d1[7]: ${d1[7]}`);

  // Second task.
  let d2 = [45, 78, 10, 3];
  let amount = 0;
  d2.forEach(e => amount += e);
  console.log(`d2: ${d2}`);
  console.log(`Amount: ${amount}`);

  // Third task.
  let d3 = [45, 78, 10, 3];
  amount = 0;
  d3[7] = 100;
  d3.forEach(e => {
    if (typeof e != 'undefined') {
      amount += e;
    }
  });
  console.log(`d3: ${d3}`);
  console.log(`Amount: ${amount}`);

  // Four task.
  let d4 = [45, 78, 10, 3];
  console.log(`Start: ${d4}`);
  let result = d4.sort(my);
  console.log(`End: ${result}`);

  function my(a, b) {
    return b - a;
  }

  // Fifth task.
  document.writeln('<h3>Fifth task:</h3>');
  let d5 = [];
  let rows = 3;
  let cols = 4;
  for (let i = 0; i < rows; i++) {
    d5[i] = [];
    for (let j = 0; j < cols; j++) {
      d5[i][j] = 5;
    }
  }

  print({
    array: d5,
    rows: rows,
    cols: cols,
  });

  function print(array) {
    for (let i = 0; i < array.rows; i++) {
      for (let j = 0; j < array.cols; j++) {
        document.writeln(`${array.array[i][j]}`);
      }
      document.writeln('<br>');
    }
  }
}

test();