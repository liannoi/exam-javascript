'use strict';

class UserFetcher extends Fetcher {
  constructor(outputSelector, resource) {
    super(outputSelector, resource);
  }

  async fetch(length = undefined) {
    const self = this;

    function createOption(user) {
      let option = document.createElement('option');
      option.value = `user_${user['id']}`;
      option.innerHTML = `(${user['id']}) ${user['name']}`;
      option.setAttribute('data-user-id', user['id']);
      self.outputSelector.appendChild(option);
    }

    if (typeof length === 'undefined') {
      return this.fetchJson().then(j => j.forEach(e => createOption(e)));
    }

    return this.fetchJson().then(j => {
      if (length >= j.length) {
        length = j.length;
      }

      for (let i = 0; i < length; i++) {
        createOption(j[i]);
      }
    });
  }
}

async function runtime() {
  let userFetcher = new UserFetcher(document.querySelector('#users-combobox'),
      'https://jsonplaceholder.typicode.com/users');
  await userFetcher.fetch();
  document.querySelector('#users-combobox').
      addEventListener('change', async function() {
        let userPostsFetcher = new UserPostsFetcher(
            document.querySelector('#output'),
            `https://jsonplaceholder.typicode.com/posts?userId=${this.options[this.selectedIndex].dataset.userId}`);
        document.querySelector('#output').childNodes.forEach(e => e.remove());
        await userPostsFetcher.fetch();
      });
}

runtime();