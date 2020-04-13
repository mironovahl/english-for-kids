import data from './data';
import {Card} from './generate';
import {Statistic} from './statistic';
const createPage = (choice) => {
  console.log(1);
  document.querySelector('.header__text_categories').innerHTML=choice;
    const renderCard = () => {
      let content = getContainer();
      if(choice=='Statistics'){
        generateStats(data[choice]).forEach(el => {
          content.append(el.generateCard());
        })
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
      console.log(d);
      let cards = [];
      d.forEach(el => {
          cards.push(new Card(el))
      });
      return cards;
    }
    const generateStats = (d) => {
      let cards = [];
      d.forEach(el => {
          cards.push(generateCards(data[el.word]))
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