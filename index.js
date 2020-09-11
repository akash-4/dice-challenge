var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;
document.querySelector('.img1').setAttribute("src","images/dice"+(player1)+".png");
document.querySelector('.img2').setAttribute("src","images/dice"+(player2)+".png");
if(player1>player2)
document.querySelector('h1').innerHTML="🚩Player 1 Wins!!";
else if(player2>player1)
document.querySelector('h1').innerHTML="Player 2 Wins!!🚩";
else
document.querySelector('h1').innerHTML="Draw!!";

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('h1').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i==txt.length-1)
  setTimeout(function(){
  {
  i=-1;
  speed = 100
  setTimeout(function(){
    document.querySelector('h1').innerHTML=""
  }, 100); 
  setTimeout(typeWriter, speed);
  }
},speed)
 
}

typeWriter();