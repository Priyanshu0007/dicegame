var randomVariable1=Math.random();
randomVariable1=Math.floor(randomVariable1*6)+1;
var source1 = "images/dice".concat(randomVariable1, ".png");
//console.log(source1)
//console.log(randomVariable1);
document.querySelectorAll("img")[0].setAttribute("src", source1);
var randomVariable2=Math.floor(Math.random()*6)+1;
var source2 = "images/dice".concat(randomVariable2, ".png");
document.querySelectorAll("img")[1].setAttribute("src", source2);
if(randomVariable1>randomVariable2){
    document.querySelectorAll("h1")[0].textContent="Player 1 Wins";
}
else if(randomVariable2>randomVariable1){
    document.querySelectorAll("h1")[0].textContent="Player 2 Wins";
}
else{
  document.querySelectorAll("h1")[0].textContent="Draw";
}
