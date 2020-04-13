export class Statistic{
  constructor({word,translate,image,audio,click,win,fail,proc}){
    this.word=word;
    this.translate=translate;
    this.image=image;
    this.audio=audio;
    this.click=click;
    this.win=win;
    this.fail=fail;
    this.proc=proc;
  }
  generateStat(){
    let template='';
    let div=document.createElement('div');
    div.className='card-stat';
    div.id=this.word;
    template += `<div class="card-stat__img">`;
    template+=`<img class="image" src=${this.image} alt=${this.word}>`;
    template += `</div>`;
    template += `<div class="card-stat__text">`;
    template += `<p class="word">Слово: ${this.word}</p>`;
    template += `<p class="word">Перевод: ${this.translate}</p>`;
    template += `<p class="word">Клики: ${this.click} раз</p>`;
    template += `<p class="word">Угадано: ${this.win} раз</p>`;
    template += `<p class="word">Не угадано: ${this.fail} раз</p>`;
    template += `<p class="word">% ошибок: ${this.proc}</p>`;
    template += `</div>`;
    div.innerHTML=template;
    return div;
  }

}