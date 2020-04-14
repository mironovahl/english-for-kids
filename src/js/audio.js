import data from './data';
let dataS = JSON.parse(localStorage.getItem("data"));
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
    localStorage.setItem ("randAudio", sounds[rand]);
    return audio;
  }
  Repeat(audio){
    this.audio=audio;
    audio.play();
  }
   Check(id,randAudio){
    for(let i = 0; i < data[this.categ].length; i++) {
      if(data[this.categ][i].word==id){
        if(data[this.categ][i].audio==randAudio){
          let audio=new Audio('../src/audio/correct.mp3');
          dataS[this.categ][i].win+=1;
          localStorage.setItem ("data", JSON.stringify(dataS));
          audio.play();
        }
        else{
          let audio=new Audio('../src/audio/error.mp3');
          audio.play();
          for(let i = 0; i < data[this.categ].length; i++) {
            if(data[this.categ][i].audio==randAudio){
              dataS[this.categ][i].fail+=1;
              localStorage.setItem ("data", JSON.stringify(dataS));
            }
          }
        }
      }
    }
  } 

}