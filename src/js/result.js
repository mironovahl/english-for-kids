import { createPage } from "./generatePage";

const ResultPage=(countFail)=>{
  document.querySelector('.content').innerHTML='';
  let audio
  if(countFail==0){
    audio=new Audio('../src/audio/success.mp3');
    document.querySelector('.content').classList.add('result-win');
  }
  else{
    audio=new Audio('../src/audio/failure.mp3');
    document.querySelector('.content').classList.add('result-lose');
    let div=document.createElement('div');
    div.className='result-text';
    div.innerHTML=`<p class="error">Сделано ошибок: ${countFail} раз</p>`;
    div.innerHTML+=`<p class="error">Надо потренироваться ещё</p>`;
    document.querySelector('.content').append(div);
  }
  audio.play();
}
const createStar=(res)=>{
  let star;
  if(res==true){
    star=`<img class="image" src=../src/img/happy-star.png alt="happy-star">`
  }
  else{
    star=`<img class="image" src=../src/img/sad-star.png alt="sad-star">`
  }
  document.querySelector('.star').innerHTML+=star;
}


export {ResultPage,createStar}