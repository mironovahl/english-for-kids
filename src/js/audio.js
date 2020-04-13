import data from './data';
export class Sound{
  constructor (categ){
    this.categ=categ;
  }
  AudioGenerate(){
    let sounds=[];
    for(let i=0;i<data[this.categ].length;i++){
      sounds[i]=data[this.categ][i].audio;
    }
    return sounds
  }
  AudioChoice(sounds){
    let rand = Math.floor(Math.random() * sounds.length);
    let audio=new Audio(sounds[rand]);
    return audio;
  }
  Repeat(audio){
    this.audio=audio;
    audio.play();
  }

}