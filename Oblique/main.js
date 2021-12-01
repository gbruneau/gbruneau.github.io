
var cards=[];
var cardsURL='data/obliquestrategies.json';


function readCards(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      const myRes = JSON.parse(this.responseText);
      cards = myRes.cardlist;
    }
    xmlhttp.open("GET", cardsURL, true);
    xmlhttp.send();
}


function getCard()
{
    var selectedCard=Math.floor(Math.random() * cards.length); 
    var cardText=cards[selectedCard].card;
    document.getElementById("card").innerHTML  = cardText;
}


//=== MAIN ===/


readCards();

