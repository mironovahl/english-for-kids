import data from './js/data';
import {Card} from './js/generate';
import {createPage} from './js/generatePage';
const BURGER=document.querySelector('.header__burger');
const MENU=document.querySelector('.sidebar');
const CONTENT=document.querySelector('.content');
const SWITCH=document.querySelector('.header__switcher');

BURGER.addEventListener('click',(event)=>{
  if(document.querySelector('.sidebar').classList.contains('show')){
    document.querySelector('.sidebar').classList.remove('show');
    document.querySelector('.header__burger').classList.remove('open')

  }
  else{
    document.querySelector('.header__burger').classList.add('open');
    document.querySelector('.sidebar').classList.add('show');
  }
})

const Play=()=>{
  if(document.querySelector('.header__switcher').classList.contains('check')){
    document.querySelectorAll('.card').forEach(el=>el.classList.add('play'));
  }
  else{
    document.querySelectorAll('.card').forEach(el=>el.classList.remove('play'));
  }
}

SWITCH.addEventListener('click',(event)=>{
  if(document.querySelector('.header__switcher').classList.contains('check')){
    document.querySelector('.header__switcher').classList.remove('check');
    Play();
  }
  else{
    document.querySelector('.header__switcher').classList.add('check');
    Play();

  }
})

MENU.addEventListener('click',(event)=>{
  if(event.target.closest('.menu')){
    MENU.querySelectorAll('li').forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
    if(!event.target.classList.contains('menu__categories')){
      document.querySelector('.sidebar').classList.remove('show');
      document.querySelector('.header__burger').classList.remove('open');
      let choice=event.target.innerText;
      if(event.target.innerText=='Main'){
        choice='Categories'
      }
      createPage(choice);
      Play();
    }
  }
})


CONTENT.addEventListener('click',(event)=>{
  if(event.target.classList.contains('rotate')){
    event.target.closest('.card').classList.add('translate');
    event.target.closest('.card').onmouseleave=()=>{
      event.target.closest('.card').classList.remove('translate');
    }
  }
  else if(event.target.closest('.card')&&!event.target.closest('.card').classList.contains('translate')){
    let elem=event.target.closest('.card');
    let choice =document.querySelector('.header__text_categories').innerHTML;
   let ListCard=document.querySelector('.content').childNodes;
   for(let i = 0; i < ListCard.length; i++) {
    if(ListCard[i]==elem){
      let c =new Card(data[choice][i])
      c.PlayAudio();
    }
  }
  }
  else if(event.target.closest('.card-categories')){
    createPage(event.target.closest('.card-categories').id)
    Play();
  }
})

window.onload = function() {
  createPage('Categories');
}
