'use strict';

class UserPostsFetcher extends Fetcher {
  constructor(outputSelector, resource) {
    super(outputSelector, resource);
  }

  async fetch(length = undefined) {
    const self = this;

    function createCard(userPost) {
      let firstParentElement = document.createElement('div');
      firstParentElement.classList.add('col', 'mt-4');

      let secondParentElement = document.createElement('div');
      secondParentElement.classList.add('card');

      let cardElement = document.createElement('div');
      cardElement.classList.add('card-body');

      let cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title', 'text-bold', 'text-sentence');
      cardTitle.setAttribute('data-user-post-id', userPost['id']);
      cardTitle.innerHTML = userPost['title'];

      let cardBody = document.createElement('p');
      cardBody.classList.add('card-text', 'text-sentence');
      cardBody.innerHTML = userPost['body'];

      cardElement.appendChild(cardTitle);
      cardElement.appendChild(cardBody);
      secondParentElement.appendChild(cardElement);
      firstParentElement.appendChild(secondParentElement);
      self.outputSelector.appendChild(firstParentElement);
    }

    if (typeof length === 'undefined') {
      this.fetchJson().then(j => j.forEach(e => createCard(e)));
    }

    return this.fetchJson().then(j => {
      if (length >= j.length) {
        length = j.length;
      }

      for (let i = 0; i < i < length; i++) {
        createCard(j[i]);
      }
    });
  }
}