import data from './data';
import Card from './generate';
import Statistic from './statistic';

let sortby;
const diffWord = [];
let reverse = false;
const getContainer = () => {
  const container = document.querySelector('.content');
  container.innerHTML = '';
  return container;
};
const generateCards = (d) => {
  const cards = [];
  d.forEach((el) => {
    cards.push(new Card(el));
  });
  return cards;
};

const generateCardStat = (d) => {
  const cards = [];
  d.forEach((el) => {
    cards.push(new Statistic(el));
  });
  return cards;
};
const Sort = (d, sort) => {
  d.sort((prev, next) => {
    if (reverse) {
      if (prev[sort] > next[sort]) return -1;
    } else if (prev[sort] < next[sort]) return -1;
    return new Error('Reverse is not defined');
  });
  return d;
};

const createPage = (choice) => {
  document.querySelector('.content').classList.remove('result-win');
  document.querySelector('.content').classList.remove('result-lose');
  const dataS = JSON.parse(localStorage.getItem('data'));
  document.querySelector('.header__text_categories').innerHTML = choice;
  const generateStats = (d) => {
    const cards = [];
    const diffW = [];
    d.forEach((el) => {
      dataS[el.word].forEach((ele) => {
        if (ele.proc !== 0) {
          diffW.push(ele);
        }
      });
      cards.push(generateCardStat(dataS[el.word]));
    });
    const diffWord1 = Sort(diffW, 'proc');

    for (let i = 0; i < 8; i += 1) {
      if (diffWord1[i] !== undefined) { diffWord[i] = diffWord1[i]; }
    }
    let cardList = [];
    let k = 0;
    for (let i = 0; i < cards.length; i += 1) {
      for (let j = 0; j < cards[i].length; j += 1) {
        k += 1;
        cardList[k] = cards[i][j];
      }
    }
    if (sortby) {
      cardList = Sort(cardList, sortby);
    }
    return cardList;
  };

  const renderCard = () => {
    const content = getContainer();
    if (choice === 'Statistics') {
      generateStats(dataS[choice]).forEach((el) => {
        content.append(el.generateStat());
      });
      document.querySelectorAll('.card').forEach((el) => el.classList.add('stat'));
    } else {
      generateCards(dataS[choice]).forEach((el) => {
        content.append(el.generateCard());
      });
    }
  };

  if (dataS) {
    renderCard();
  }
};

const StatisticButton = () => {
  const div = document.createElement('div');
  div.className = 'statistic-button';
  document.querySelector('main').prepend(div);
  let template = '';
  const ul = document.createElement('ul');
  ul.className = 'ul-statistics';
  template += 'Сортировать';
  template += '<li class="sort-li" id="word">По слову</li>';
  template += '<li class="sort-li" id="translate">По переводу</li>';
  template += '<li class="sort-li" id="click">По кликам</li>';
  template += '<li class="sort-li" id="win">По угадываниям</li>';
  template += '<li class="sort-li" id="fail">По ошибкам</li>';
  template += '<li class="sort-li" id="proc">По процентам ошибок</li>';
  ul.innerHTML = template;
  document.querySelector('.statistic-button').prepend(ul);
  const buttondiff = document.createElement('button');
  const button = document.createElement('button');
  buttondiff.className = 'button-diff';
  buttondiff.innerText = 'Repeat difficult words';
  document.querySelector('.statistic-button').append(buttondiff);
  button.className = 'button-reset';
  button.innerText = 'Reset';
  document.querySelector('.statistic-button').append(button);

  document.querySelector('.ul-statistics').onclick = (event) => {
    if (!document.querySelector('.ul-statistics').classList.contains('active')) {
      document.querySelector('.ul-statistics').classList.add('active');
    } else {
      document.querySelector('.ul-statistics').classList.remove('active');
      if (event.target.classList.contains('sort-li')) {
        if (sortby === event.target.id) {
          reverse = !reverse;
        }
        sortby = event.target.id;
        createPage('Statistics');
      }
    }
  };
  document.querySelector('.button-reset').onclick = () => {
    localStorage.setItem('data', JSON.stringify(data));
    createPage('Statistics');
  };
  document.querySelector('.button-diff').onclick = () => {
    const renderCard = () => {
      const content = getContainer();
      generateCards(diffWord).forEach((el) => {
        content.append(el.generateCard());
      });
    };

    if (diffWord) {
      renderCard();
    }
  };
};


export { createPage, StatisticButton };
