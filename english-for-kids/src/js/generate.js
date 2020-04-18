export default class Card {
  constructor({
    word, translate, image, audio,
  }) {
    this.word = word;
    this.translate = translate;
    if (translate === undefined) { this.translate = false; }
    if (audio === undefined) { this.audio = false; }
    this.image = image;
    this.audio = audio;
  }

  generateCard() {
    let template = '';
    const div = document.createElement('div');
    div.className = 'card';
    div.id = this.word;
    template += '<div class="front">';
    template += `<img class="image" src=${this.image} alt=${this.word}>`;
    template += '<div class="card_text">';
    template += `<span class="word">${this.word}</span>`;
    template += '</div>';
    if (this.audio || this.translate) {
      template += '<img class="rotate" src=../src/img/rotate.png alt=arrow>';
    }
    template += '</div>';
    template += '</div>';
    if (this.audio || this.translate) {
      template += '<div class="back">';
      template += `<img class="image" src=${this.image} alt=${this.word}>`;
      template += '<div class="card_text">';
      template += `<span class="translate">${this.translate}</span>`;
      template += '</div>';
      template += '</div>';
    } else {
      div.className += '-categories';
    }
    div.innerHTML = template;
    return div;
  }

  PlayAudio() {
    const audio = new Audio(this.audio);
    audio.play();
  }
}
