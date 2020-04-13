import {Sound} from './audio';
const Play=()=>{
  if(document.querySelector('.header__switcher').classList.contains('check')&&document.querySelector('.header__text_categories').innerHTML!='Statistics'){
    document.querySelectorAll('.card').forEach(el=>el.classList.add('play'));
    document.querySelectorAll('.card-categories').forEach(el=>el.classList.add('play'));
    let div=document.createElement('div');
    if(document.querySelector('.content').children[1].classList.contains('card')){
      div.className='button game';
      div.innerHTML=`<button class="button_start">Start game</button>`;
      document.querySelector('.content').append(div);
      let n=new Sound(document.querySelector('.header__text_categories').innerHTML);
      let soundList =n.AudioGenerate();
      let choice=n.AudioChoice(soundList);
      //PlayChoice(choice);
      document.querySelector('.button_start').onclick=function(){
        if(!document.querySelector('.button_start').classList.contains('repeat')){
          document.querySelector('.button_start').classList.add('repeat');
          document.querySelector('.button_start').innerHTML='R';
          n.Repeat(choice);
        }
        else{
          n.Repeat(choice);
        }
      }
    }
  }
  else{
    document.querySelectorAll('.card').forEach(el=>el.classList.remove('play'));
    document.querySelectorAll('.card-categories').forEach(el=>el.classList.remove('play'));
    document.querySelectorAll('.button').forEach(el=>el.classList.remove('game'));
  }
}
/* const PlayChoice=()=>{
  let n=new Sound(document.querySelector('.header__text_categories').innerHTML);
  let soundList =n.AudioGenerate();
  let choice=n.AudioChoice(soundList);
  return elem;
} */
export {Play}