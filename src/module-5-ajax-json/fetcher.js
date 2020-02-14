'use strict';

class Fetcher {
  constructor(outputSelector, resource) {
    this.outputSelector = outputSelector;
    this.resource = resource;
  }

  fetchJson() {
    return fetch(this.resource).then(i => i.json());
  }

  async fetch(length = undefined) {
  }
}
