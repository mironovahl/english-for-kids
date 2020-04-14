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
    return sounds.sort(()=>Math.random()-0.5)
  }
  AudioChoice(sounds,i){
    let audio=new Audio(sounds[i]);
    localStorage.setItem ("randAudio", sounds[i]);
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
          console.log(data[this.categ][i].win);
          data[this.categ][i].win+=1;
          localStorage.setItem ("data", JSON.stringify(data));
          audio.play();
          return true
        }
        else{
          let audio=new Audio('../src/audio/error.mp3');
          audio.play();
          for(let i = 0; i < data[this.categ].length; i++) {
            if(data[this.categ][i].audio==randAudio){
              data[this.categ][i].fail+=1;
              localStorage.setItem ("data", JSON.stringify(data));
            }
          }
          return false;
        }
      }
    }
  } 

}