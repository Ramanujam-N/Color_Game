var rgval = document.getElementsByClassName("rgbvalue")[0];
// THe code modali

var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var new_c = document.getElementById("new_c");
var btnlist = document.querySelectorAll(".btn");
var maxele = 6;
var answer=0;
var current = "hard";
var maxval = 6;
function game_mode(mode)
{
  if(mode=="easy")
  {
    maxval=3;
  }
  else if(mode=="hard")
  {
    maxval=6;
  }

  new_c.innerHTML = "NEW COLORS";
  document.getElementsByClassName("heading")[0].style.backgroundColor="rgb("+0+","+120+","+180+")";

  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  rgval.innerHTML = "rgb("+red+", "+green+", "+blue+")";

  var btnlist = document.querySelectorAll(".btn");

  for(var i=0;i<maxval;i++)
  {
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    btnlist[i].style.backgroundColor ='rgb('+r+','+g+','+b+')';
    btnlist[i].addEventListener("click",something);
  }

  for(var i = maxval;i<maxele;i++)
    btnlist[i].style.background='rgb('+35+','+35+','+35+')';

  answer = (Math.floor(Math.random()*maxval));
  btnlist[answer].style.backgroundColor =  "rgb("+red+", "+green+", "+blue+")";

}


function win()
{

  color = btnlist[answer].style.backgroundColor;
  document.getElementsByClassName("heading")[0].style.backgroundColor=color;
  new_c.innerHTML = "Play Again ?";
  for(var i = 0;i<maxval;i++)
  {
    btnlist[i].style.backgroundColor = color;
    btnlist[i].style.opacity =1;
    btnlist[i].removeEventListener("click",something);
}
}

function something(){
 if(btnlist[answer]==this)
     win();
  else
    this.style.opacity -=1.0;
}


game_mode(current);






new_c.addEventListener("click",function(){
  game_mode(current);
});

easy.addEventListener("click",function(){
  game_mode("easy");
  current = "easy";
});
hard.addEventListener("click",function(){
  game_mode("hard");
  current="hard";
});
