'use strict';

class TextMarker {
  constructor(text, word) {
    this.text = text;
    this.word = word;
  }

  mark(tag = 'mark') {
    const regex = new RegExp(`${this.word}[а-яa-z]{0,10}`, 'ig');
    let result = '';
    this.text.split(' ').forEach(e => {
      if (regex.test(e)) {
        e = `<${tag}>${e}</${tag}>`;
      }

      result += `${e} `;
    });

    return result;
  }
}

class RuntimeTextMarker {
  constructor(executor, resultBlock) {
    this.executor = executor;
    this.resultBlock = resultBlock;
  }

  wait() {
    const self = this;

    this.executor.addEventListener('click', function() {
      this.blur();

      showResultBlock();
      let textMarker = new TextMarker(getUserText(), getWord());
      let text = document.querySelector('.result .marked-text');
      newParagraph(text);
      text.children[0].innerHTML = textMarker.mark();
    });

    function showResultBlock() {
      self.resultBlock.classList.remove('d-none');
    }

    function getUserText() {
      return document.querySelector('#user_text').value;
    }

    function getWord() {
      return document.querySelector('#user_selected_word').value;
    }

    function newParagraph(text) {
      text.childNodes.forEach(e => e.remove());
      let paragraph = document.createElement('p');
      text.appendChild(paragraph);
    }
  }
}

function test() {
  let runtimeTextMarker = new RuntimeTextMarker(
      document.querySelector('#start-process-button'),
      document.querySelector('.result'));
  runtimeTextMarker.wait();

  document.querySelector('#mock-data-button').
      addEventListener('click', function() {
        this.blur();

        document.querySelector(
            '#user_text').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in vitae turpis. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Dapibus ultrices in iaculis nunc sed augue. Quisque id diam vel quam elementum pulvinar etiam non. Sed libero enim sed faucibus turpis in eu. Sit amet massa vitae tortor condimentum lacinia. Pretium aenean pharetra magna ac. Donec et odio pellentesque diam volutpat commodo. Sed enim ut sem viverra aliquet. Interdum consectetur libero id faucibus nisl. Platea dictumst quisque sagittis purus sit. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Netus et malesuada fames ac turpis. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Malesuada proin libero nunc consequat interdum. Tempus iaculis urna id volutpat lacus. Cras sed felis eget velit aliquet sagittis id. Justo laoreet sit amet cursus sit amet dictum. Sit amet facilisis magna etiam tempor orci eu. Blandit volutpat maecenas volutpat blandit aliquam etiam. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Est sit amet facilisis magna etiam tempor. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Curabitur vitae nunc sed velit dignissim sodales ut eu. Eget arcu dictum varius duis at consectetur. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Netus et malesuada fames ac turpis egestas sed tempus urna. Urna cursus eget nunc scelerisque. Magnis dis parturient montes nascetur. Quam pellentesque nec nam aliquam sem. In pellentesque massa placerat duis. Mi quis hendrerit dolor magna eget est lorem. Quisque egestas diam in arcu cursus euismod quis. Sit amet tellus cras adipiscing. At varius vel pharetra vel. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Risus quis varius quam quisque. Aliquam vestibulum morbi blandit cursus risus at ultrices. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Egestas sed sed risus pretium quam. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Ac tortor vitae purus faucibus ornare suspendisse sed. Ipsum consequat nisl vel pretium lectus quam. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Placerat vestibulum lectus mauris ultrices eros in. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Id aliquet risus feugiat in ante metus dictum at. Ullamcorper sit amet risus nullam eget felis eget. Euismod nisi porta lorem mollis. Erat imperdiet sed euismod nisi porta. Lacus suspendisse faucibus interdum posuere lorem. Praesent elementum facilisis leo vel fringilla est. Risus nullam eget felis eget. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Varius vel pharetra vel turpis nunc eget lorem dolor. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Accumsan in nisl nisi scelerisque eu. Sed tempus urna et pharetra pharetra massa. Turpis nunc eget lorem dolor. Mattis molestie a iaculis at. Aliquet nibh praesent tristique magna sit amet purus. Nunc aliquet bibendum enim facilisis gravida neque. Turpis nunc eget lorem dolor sed.';
        document.querySelector('#user_selected_word').value = 'lorem';
      });
}

test();