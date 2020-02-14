'use strict';

function main() {
  let firstCity = firstTask();
  let secondCity = secondTask();
  thirdTask(firstCity, secondCity);
  fourTask(firstCity, secondCity);
  document.writeln('<br><br> Next in console.log() ...');
  console.log(firstCity.exportStr());
  console.log(secondCity.exportStr());

  function write(display, city) {
    document.writeln(
        `${display}. Name: ${city.name}; Population: ${city.population}<br>`);
  }

  function firstTask() {
    let firstCity = {};
    firstCity.name = 'ГородN';
    firstCity.population = 1e6;
    write('First city', firstCity);
    return firstCity;
  }

  function secondTask() {
    let secondCity = {
      name: 'ГородM',
      population: 1e6,
    };
    write('Second city', secondCity);
    return secondCity;
  }

  function thirdTask(firstCity, secondCity) {
    firstCity.getName = function() {return this.name;};
    secondCity.getName = function() {return this.name;};

    document.writeln(`First city: ${firstCity.getName()}<br>`);
    document.writeln(`Second city: ${secondCity.getName()}<br>`);
  }

  function fourTask(firstCity, secondCity) {
    firstCity.exportStr = function() {
      let result = '';
      Object.entries(firstCity).
          filter(e => typeof e[1] != 'function').
          forEach(e => {
            result += `${e[0]}=\n${e[1]}\n`;
          });
      return result;
    };

    secondCity.exportStr = function() {
      let result = '';
      Object.entries(secondCity).
          filter(e => typeof e[1] != 'function').
          forEach(e => {
            result += `${e[0]}=\n${e[1]}\n`;
          });
      return result;
    };
  }
}

main();