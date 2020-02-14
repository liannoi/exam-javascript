'use strict';

class FormCompleter {
  constructor(singleLineText) {
    this.singleLineText = singleLineText;
  }

  get singleLine() {
    return document.querySelector('#user_single_line');
  }

  get multiline() {
    return document.querySelector('#multi_line');
  }

  get multilineWords() {
    return document.querySelector('#multi_line_words');
  }

  fillSingleLine() {
    this.singleLine.value = this.singleLineText;
  }

  splitMultiline() {
    this.multilineWords.value = this.multiline.value.split(' ').join('\n');
  }
}

function test() {
  let formCompleter = new FormCompleter('HTMLLab');
  document.querySelector('#start-button').addEventListener('click', function() {
    this.blur();

    formCompleter.fillSingleLine();
    formCompleter.splitMultiline();
  });
}

test();