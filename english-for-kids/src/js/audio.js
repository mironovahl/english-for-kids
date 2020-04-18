import data from './data';

export default class Sound {
  constructor(categ) {
    this.categ = categ;
  }

  AudioGenerate() {
    const sounds = [];
    for (let i = 0; i < data[this.categ].length; i += 1) {
      sounds[i] = data[this.categ][i].audio;
    }
    return sounds.sort(() => Math.random() - 0.5);
  }

  AudioChoice(sounds, i) {
    this.sounds = sounds;
    const audio = new Audio(this.sounds[i]);
    localStorage.setItem('randAudio', sounds[i]);
    return audio;
  }

  Repeat(audio) {
    this.audio = audio;
    audio.play();
  }

  Check(id, randAudio) {
    for (let i = 0; i < data[this.categ].length; i += 1) {
      if (data[this.categ][i].word === id) {
        if (data[this.categ][i].audio === randAudio) {
          const audio = new Audio('../src/audio/correct.mp3');
          const dataS = JSON.parse(localStorage.getItem('data'));
          const element = dataS[this.categ][i];
          element.win += 1;
          element.proc = ((element.fail / (element.win + element.fail)) * 100).toFixed(1);

          localStorage.setItem('data', JSON.stringify(dataS));
          audio.play();
          return true;
        }

        const audio = new Audio('../src/audio/error.mp3');
        audio.play();
        for (let j = 0; j < data[this.categ].length; j += 1) {
          if (data[this.categ][j].audio === randAudio) {
            const dataS = JSON.parse(localStorage.getItem('data'));
            const element = dataS[this.categ][j];
            element.fail += 1;
            element.proc = ((element.fail / (element.win + element.fail)) * 100).toFixed(1);
            localStorage.setItem('data', JSON.stringify(dataS));
          }
        }
        return false;
      }
    }
    return true;
  }
}
