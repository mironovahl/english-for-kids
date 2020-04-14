export class Statistic{
  constructor({word,translate,image,audio,click,win,fail,proc}){
    this.word=word;
    this.translate=translate;
    this.image=image;
    this.audio=audio;
    this.click=click;
    this.win=win;
    this.fail=fail;
    if(this.fail!=0){
      this.proc= ((this.win/this.fail)*100).toFixed(1);
    }
    else{
      this.proc=proc;
    }
    
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
    template += `<p class="word">${this.word}</p>`;
    template += `<p class="translate">Перевод: ${this.translate}</p>`;
    template += `<p class="click">Клики: ${this.click} раз</p>`;
    template += `<p class="win">Угадано: ${this.win} раз</p>`;
    template += `<p class="fail">Не угадано: ${this.fail} раз</p>`;
    template += `<p class="proc">% ошибок: ${this.proc} %</p>`;
    template += `</div>`;
    div.innerHTML=template;
    return div;
  }
}