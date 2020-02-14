'use strict';

/* Class responsible for creating the alert. */
class Alter {
  constructor(parentSelector, message) {
    this.parentSelector = parentSelector;
    this.message = message;
  }

  get closeButton() {
    return document.querySelector('#close-social-media-alert-button');
  }

  putToParent(node) {
    this.parentSelector.appendChild(node);
  }

  clear() {
    this.parentSelector.childNodes.forEach(e => e.remove());
  }

  create() {
    this.clear();

    const self = this;

    let parentDiv = createParent();
    let contentControls = createContentControls();
    let closeButton = createCloseButton();
    let contentText = createContextText();
    let paragraph = createParagraph();

    function createParent() {
      let parentDiv = document.createElement('div');
      parentDiv.classList.add('social-media-content');
      return parentDiv;
    }

    function createContentControls() {
      let contentControls = document.createElement('div');
      contentControls.classList.add('content-controls');
      return contentControls;
    }

    function createCloseButton() {
      let closeButton = document.createElement('button');
      closeButton.innerHTML = 'X';
      closeButton.setAttribute('id', 'close-social-media-alert-button');
      return closeButton;
    }

    function createContextText() {
      let contentText = document.createElement('div');
      contentText.classList.add('content-text');
      return contentText;
    }

    function createParagraph() {
      let paragraph = document.createElement('p');
      paragraph.innerHTML = self.message;
      return paragraph;
    }

    contentControls.appendChild(closeButton);
    contentText.appendChild(paragraph);
    parentDiv.appendChild(contentControls);
    parentDiv.appendChild(contentText);
    this.putToParent(parentDiv);
  }
}

function test() {
  document.querySelector('#add-button').addEventListener('click', function() {
    this.blur();

    let alter = new Alter(document.querySelector('#block-social-media'),
        'You have been subscribed!');
    alter.create();
    alter.closeButton.addEventListener('click', () => alter.clear());
  });
}

test();