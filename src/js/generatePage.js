import data from './data';
import {Card} from './generate';
const createPage = (choice) => {
  document.querySelector('.header__text_categories').innerHTML=choice;
  const renderCard = () => {
    let content = getContainer();
    generateCards(data[choice]).forEach(el => {
        content.append(el.generateCard())
    })
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
  if(data) {
    renderCard();
  }
}

export {createPage}