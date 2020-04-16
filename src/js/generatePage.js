import data from './data';
import {Card} from './generate';
import {Statistic} from './statistic';
const createPage = (choice) => {
  document.querySelector('.content').classList.remove('result-win');
  document.querySelector('.content').classList.remove('result-lose');
  let dataS = JSON.parse(localStorage.getItem("data"));
  document.querySelector('.header__text_categories').innerHTML=choice;
    const renderCard = () => {
      let content = getContainer();
      if(choice=='Statistics'){
        StatisticButton();
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
      if(document.querySelector('.header__text_categories').classList.contains('yes')){
        cardList = Sort(cardList);
      }
      return cardList;
    }

    const Sort = (d) => {
      d.sort((prev, next) => {
        if ( prev.word < next.word ) return -1;
        if ( prev.word < next.word ) return 1;
    });
    return d;
    }

    if(dataS) {
      renderCard();
    }
}

const StatisticButton = () => {
  let div=document.createElement('div');

  div.className='button-statistics';
  let template= `<div class="sort">`;
  template+=`<button class="button-sort">Sorting</button>`;
  template+=`</div>`;
  template+= `<div class="restart">`;
  template+=`<button class="button-restart">Restart</button>`;
  template+=`</div>`;
  div.innerHTML+=template;
  document.querySelector('main').append(div);
}


export {createPage,StatisticButton}