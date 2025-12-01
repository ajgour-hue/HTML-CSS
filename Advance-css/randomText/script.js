
var h1 = document.querySelector('h1');

let characters = "ABCDEFGIJKLMNOPQRSTUV";
var text = h1.innerText;



h1.addEventListener('mouseenter',function(){
    
    let i = 0 ;
    let interval = null;
 interval = setInterval(function(){
    const str =  text.split("").map((char,index)=>{
        return characters.split("")[Math.floor(Math.random()*characters.length)]
    }).join("")
    i++;
    h1.innerText = str;
    if( i == 5){
      clearInterval(interval);
      h1.innerText = text;
    }

},100)
})