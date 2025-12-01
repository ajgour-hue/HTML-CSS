
var main  =document.querySelector('.main');

main.addEventListener('mousemove' , function(dets){
    // console.log(dets.x , dets.y);
    document.body.style.setProperty("--x" , dets.x+'px');
      document.body.style.setProperty("--y" , dets.y+'px');
})