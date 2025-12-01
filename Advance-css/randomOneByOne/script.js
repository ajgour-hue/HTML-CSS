
var p = document.querySelector('p');
var characters = 'ABCDEFGHIJKLMNOPQRmnopqrstuvwxyz0123456789';

var text = p.innerText;
p.innerText = text;

let iteration = 0;

function  setRandom(){
     const str  = text.split("").map((char , index)=>{
        if(index < iteration){
    return char;
    
}
        return characters.split("")[Math.floor(Math.random()*characters.length)];
     }).join("");
     p.innerText = str;
      iteration += 0.9;
      
}

setInterval(setRandom, 30);