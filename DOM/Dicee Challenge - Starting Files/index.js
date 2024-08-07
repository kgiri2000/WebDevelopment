function getRandom(){
    return Math.floor(Math.random()*6) + 1;
}

const randomNumber1 = getRandom()-1;
const randomNumber2 =  getRandom()-1;

const pict = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
const img1 = pict[randomNumber1]
const img2 = pict[randomNumber2]

//instead of using array we can use concatination to select the random 
// const randomImg2 = "images/dice" + randomNumber1 + ".png";
// const randomImg2 =  "images/dice" + randomNumber2 + ".png";

// Also we can use other method to select the querySelector

// const image1 = document.querySelectorAll("img")[0]
// const image2 = document.querySelectorAll("img")[1]

//image1.setAttribute("src", randomImg1)
//image2.setAttribute("src", randomImg2)


document.querySelector(".img1").setAttribute("src",img1)
document.querySelector(".img2").setAttribute("src", img2)

if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 wins";
}

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins";


}
if (randomNumber1 ==  randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";

}