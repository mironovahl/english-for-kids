export class Statistic{
  constructor({word,translate,click,win,fail,proc}){
    this.word=word;
    this.translate=translate;
    this.click=click;
    this.win=win;
    this.fail=fail;
    this.proc=proc;
  }
  generateStat(){
    let template='';
    let div=document.createElement('div');
    template += `<span class="word">${this.word}</span>`;
    div.innerHTML=template;
    return div;
  }
}