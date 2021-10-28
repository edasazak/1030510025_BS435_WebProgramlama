const cards = ["cat.png","dog1.png","dog2.png"];

let card1, card2,card3;

export const oyun1= () => {
    this.random();
    if(card1==="cat.png"){
        const getCard = document.getElementById("alanId");
        getCard.innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class = 'link'> buraya </span> tıklayabilirsin";
    }
    else {
        const getCard = document.getElementById("alanId");
        getCard.innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <span class = 'link'> buraya </span> tıklayabilirsin";
    }
}
export const oyun2= () => {
    this.random();
    if(card2==="cat.png"){
        const getCard = document.getElementById("alanId");
        getCard.innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class = 'link'> buraya </span> tıklayabilirsin";
    }
    else {
        const getCard = document.getElementById("alanId");
        getCard.innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <span class = 'link'> buraya </span> tıklayabilirsin";
    }
}
export const oyun3= () => {
    this.random();
    if(card3==="cat.png"){
        const getCard = document.getElementById("alanId");
        getCard.innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class = 'link'> buraya </span> tıklayabilirsin";
    }
    else {
        const getCard = document.getElementById("alanId");
        getCard.innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <span class = 'link'> buraya </span> tıklayabilirsin";
    }
}


const img0 = document.getElementById("img0");
img0.addEventListener("click", flipCard);
const img1 = document.getElementById("img1");
img0.addEventListener("click", flipCard);
const img2 = document.getElementById("img2");
img0.addEventListener("click", flipCard);
function flipCard(){
    img0.classList.toggle("flipCard");
    img1.classList.toggle("flipCard");
    img2.classList.toggle("flipCard");
}

function random() {
    let index1 = Math.floor(Math.random()*cards.length);
    card1 = cards[index1];
    let index2 = Math.floor(Math.random()*cards.length);
    card2 = cards[index2];
    let index3 = Math.floor(Math.random()*cards.length);
    card3 = cards[index3];
}