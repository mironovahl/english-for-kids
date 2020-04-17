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
          let dataS = JSON.parse(localStorage.getItem("data"));
          let element=dataS[this.categ][i];
          element.win+=1;
          element.proc=((element.fail/(element.win+element.fail))*100).toFixed(1);

          localStorage.setItem ("data", JSON.stringify(dataS));
          audio.play();
          return true
        }
        else{
          let audio=new Audio('../src/audio/error.mp3');
          audio.play();
          for(let i = 0; i < data[this.categ].length; i++) {
            if(data[this.categ][i].audio==randAudio){
              let dataS = JSON.parse(localStorage.getItem("data"));
              let element=dataS[this.categ][i];
              element.fail+=1;
              element.proc=((element.fail/(element.win+element.fail))*100).toFixed(1);
              localStorage.setItem ("data", JSON.stringify(dataS));
            }
          }
          return false;
        }
      }
    }
  } 

}