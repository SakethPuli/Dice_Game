var randomNumber1 = Math.floor((Math.random() * 6 + 1 )) ;
var randomImage1= "dice" + randomNumber1 + ".png";
var imageSource1 = "images/" + randomImage1;
var changeSrc1 = document.querySelector(".img1").setAttribute("src", imageSource1);

var randomNumber2 = Math.floor((Math.random() * 6 + 1)) ;
var randomImage2= "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + randomImage2;
var changeSrc2 = document.querySelector(".img2").setAttribute("src", imageSource2);

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}

if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}