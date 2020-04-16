const ResultPage=(countFail)=>{
  document.querySelector('.content').innerHTML='';
  if(countFail==0)
  document.querySelector('.content').classList.add('result-win');
  else{
    document.querySelector('.content').classList.add('result-lose');
    let div=document.createElement(div);
    div.className='resilt-text';
    div.innerHTML=`<p class="error">Сделано ошибок: ${countFail} раз</p>`;
    document.querySelector('.content').append(div);
  }
}
export {ResultPage}