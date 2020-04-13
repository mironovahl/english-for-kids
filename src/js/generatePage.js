import data from './data';
import {Card} from './generate';
import {Statistic} from './statistic';
const createPage = (choice) => {
  document.querySelector('.header__text_categories').innerHTML=choice;
    const renderCard = () => {
      let content = getContainer();
      if(choice=='Statistics'){
        generateStats(data[choice]).forEach(el => {
          content.append(el.generateStat());
        })
        document.querySelectorAll('.card').forEach(el=>el.classList.add('stat'));
      }
      else{
        generateCards(data[choice]).forEach(el => {
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
          cards.push(generateCardStat(data[el.word]))
      });

      let cardList=[];
      let k=0;
      for(let i=0;i<cards.length;i++){
        for(let j=0;j<cards[i].length;j++){
          k++;
          cardList[k]=cards[i][j];
        }
      }
      return cardList;
    }

    if(data) {
      renderCard();
    }
}

export {createPage}