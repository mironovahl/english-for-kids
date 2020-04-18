import Sound from './audio';

const Play = () => {
  if (document.querySelector('.header__switcher').classList.contains('check') && document.querySelector('.header__text_categories').innerHTML !== 'Statistics') {
    document.querySelectorAll('.card').forEach((el) => el.classList.add('play'));
    document.querySelectorAll('.card-categories').forEach((el) => el.classList.add('play'));
    const div = document.createElement('div');

    if (document.querySelector('.content').children[1].classList.contains('card')) {
      const divK = document.createElement('div');
      divK.className = 'star';
      document.querySelector('.content').prepend(divK);
      div.className = 'button game';
      div.innerHTML = '<button class="button_start">Start game</button>';
      document.querySelector('.content').append(div);
      const n = new Sound(document.querySelector('.header__text_categories').innerHTML);
      const soundList = n.AudioGenerate();
      localStorage.setItem('soundList', JSON.stringify(soundList));
      const choice = n.AudioChoice(soundList, 0);
      document.querySelector('.button_start').onclick = () => {
        if (!document.querySelector('.button_start').classList.contains('repeat')) {
          document.querySelector('.button_start').classList.add('repeat');
          document.querySelector('.button_start').innerHTML = 'R';
          n.Repeat(choice);
        } else {
          const m = localStorage.getItem('randAudio');
          const audio = new Audio(m);
          n.Repeat(audio);
        }
      };
    }
  } else {
    if (document.querySelector('.game') && document.querySelector('.star')) {
      document.querySelector('.game').parentNode.removeChild(document.querySelector('.game'));
      document.querySelector('.star').parentNode.removeChild(document.querySelector('.star'));
    }
    document.querySelectorAll('.card').forEach((el) => {
      el.classList.remove('play');
      el.classList.remove('inactive');
    });
    document.querySelectorAll('.card-categories').forEach((el) => el.classList.remove('play'));
  }
};


export default Play;
