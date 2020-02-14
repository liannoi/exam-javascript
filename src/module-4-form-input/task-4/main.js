'use strict';

class TableRandomNumbers {
  constructor(parentSelector, cells) {
    this.parentSelector = parentSelector;
    this.cells = cells;
  }

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generate() {
    const self = this;

    let table = generateTable();
    generateHead(table);
    let tBody = document.createElement('tbody');
    for (let j = 0; j < this.cells; j++) {
      generateRowRandomNumbers();
    }
    this.parentSelector.appendChild(table);

    function generateTable() {
      let table = document.createElement('table');
      table.classList.add('table', 'table-bordered', 'table-striped');
      return table;
    }

    function generateHead(table) {
      let tHead = document.createElement('thead');
      let tr = document.createElement('tr');
      for (let i = 0; i < self.cells; i++) {
        let th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerHTML = i + 1;
        tr.appendChild(th);
      }
      tHead.appendChild(tr);
      table.appendChild(tHead);
      return table;
    }

    function generateRowRandomNumbers() {
      let tr = document.createElement('tr');
      for (let i = 0; i < self.cells; i++) {
        let td = document.createElement('td');
        td.setAttribute('scope', 'col');
        td.innerHTML = self.getRandomNumber(100, 999).toString();
        tr.appendChild(td);
      }
      tBody.appendChild(tr);
      table.appendChild(tBody);
    }
  }
}

function test() {
  let tableRandomNumbers = new TableRandomNumbers(
      document.querySelector('.table-block'), 20);
  tableRandomNumbers.generate();
}

test();