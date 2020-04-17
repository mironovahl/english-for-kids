import data from './data';
import {Card} from './generate';
import {Statistic} from './statistic';
let sortby;
const createPage = (choice) => {
  document.querySelector('.content').classList.remove('result-win');
  document.querySelector('.content').classList.remove('result-lose');
  let dataS = JSON.parse(localStorage.getItem("data"));
  document.querySelector('.header__text_categories').innerHTML=choice;
    const renderCard = () => {
      let content = getContainer();
      if(choice=='Statistics'){
        generateStats(dataS[choice]).forEach(el => {
          content.append(el.generateStat());
        })
        document.querySelectorAll('.card').forEach(el=>el.classList.add('stat'));
      }
      else{
        generateCards(dataS[choice]).forEach(el => {
          content.append(el.generateCard())
        })
      }
    }
    const getContainer = () => {
      const container = document.querySelector('.content');
      container.innerHTML = '';
      return container;
    }
    const generateCards = (d) => {
      let cards = [];
      d.forEach(el => {
          cards.push(new Card(el))
      });
      return cards;
    }

    const generateCardStat = (d) => {
      let cards = [];
      d.forEach(el => {
          cards.push(new Statistic(el))
      });
      return cards;
    }

    const generateStats = (d) => {
      let cards = [];
      d.forEach(el => {
          cards.push(generateCardStat(dataS[el.word]))
      });

      let cardList=[];
      let k=0;
      for(let i=0;i<cards.length;i++){
        for(let j=0;j<cards[i].length;j++){
          k++;
          cardList[k]=cards[i][j];
        }
      }
      if(sortby){
        console.log(987654);
        console.log(sortby);

        cardList = Sort(cardList,sortby);
      }
      return cardList;
    }

    const Sort = (d,sortby) => {
      d.sort((prev, next) => {
        if ( prev[sortby] < next[sortby]) return -1;
    });
    return d;
    }

    if(dataS) {
      renderCard();
    }
}

const StatisticButton = () => {
  let div=document.createElement('div');
  div.className='statistic-button';
  document.querySelector('main').prepend(div);
  let template='';
  let ul=document.createElement('ul');
  ul.className='ul-statistics';
  template+='Сортировать';
  template+='<li class="sort-li" id="word">По слову</li>';
  template+='<li class="sort-li" id="translate">По переводу</li>';
  template+='<li class="sort-li" id="click">По кликам</li>';
  template+='<li class="sort-li" id="win">По угадываниям</li>';
  template+='<li class="sort-li" id="error">По ошибкам</li>';
  template+='<li class="sort-li" id="proc">По процентам ошибок</li>';
  ul.innerHTML=template;
  document.querySelector('.statistic-button').prepend(ul);
  let button=document.createElement('button');
  button.className='button-reset';
  button.innerText='Reset';
  document.querySelector('.statistic-button').append(button);
  document.querySelector('.ul-statistics').onclick=function(){
    if(!document.querySelector('.ul-statistics').classList.contains('active')){
      document.querySelector('.ul-statistics').classList.add('active');
    }
    else{
      document.querySelector('.ul-statistics').classList.remove('active');
      console.log(event.target);
      if(event.target.classList.contains('sort-li')){
        sortby=event.target.id;
        createPage('Statistics')
      }
    }
  }
  document.querySelector('.button-reset').onclick=function(){
    localStorage.setItem ("data", JSON.stringify(data));
    createPage('Statistics');
  }
}


export {createPage,StatisticButton}