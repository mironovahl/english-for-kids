import data from './data';
import {Card} from './generate';
import {Statistic} from './statistic';
const createPage = (choice) => {
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
        console.log(1234567);
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

    if(data) {
      renderCard();
    }
}

export {createPage}