import {Sound} from './audio';
import {createPage} from './generatePage';
const Play=()=>{
  if(document.querySelector('.header__switcher').classList.contains('check')&&document.querySelector('.header__text_categories').innerHTML!='Statistics'){
    document.querySelectorAll('.card').forEach(el=>el.classList.add('play'));
    document.querySelectorAll('.card-categories').forEach(el=>el.classList.add('play'));
    let div=document.createElement('div');

    if(document.querySelector('.content').children[1].classList.contains('card')){
      let divK=document.createElement('div');
      divK.className='star';
      document.querySelector('.content').prepend(divK);
      div.className='button game';
      div.innerHTML=`<button class="button_start">Start game</button>`;
      document.querySelector('.content').append(div);
      let n=new Sound(document.querySelector('.header__text_categories').innerHTML);
      let soundList =n.AudioGenerate();
      localStorage.setItem("soundList", JSON.stringify(soundList))
      let choice=n.AudioChoice(soundList,0);
      document.querySelector('.button_start').onclick=function(){
        if(!document.querySelector('.button_start').classList.contains('repeat')){
          document.querySelector('.button_start').classList.add('repeat');
          document.querySelector('.button_start').innerHTML='R';
          n.Repeat(choice);
        }
        else{
          let m=localStorage.getItem("randAudio");
          let choice=new Audio(m);
          n.Repeat(choice);
        }
      }
    }
  }
  else{
    if(document.querySelector('.game')&&document.querySelector('.star')){
      document.querySelector('.game').parentNode.removeChild(document.querySelector('.game'))
      document.querySelector('.star').parentNode.removeChild(document.querySelector('.star'))

    }
    document.querySelectorAll('.card').forEach(el=>{
      el.classList.remove('play');
      el.classList.remove('inactive');
    });
    document.querySelectorAll('.card-categories').forEach(el=>el.classList.remove('play'));
  }
}


export {Play}