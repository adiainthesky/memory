export default function Player(name) {
  this.name = name;
  this.turn = 0;
  this.total = 0;
}


Player.prototype.turn = function() {
  let flip1 = this.cardFlip() 
  let flip2 = this.cardFlip()
  if (flip1 === flip2)
    
    this.total += 2
    // pass turn to next player
}

Player.prototype.cardFlip = function() {
  alert("Please select a card");
  $("#table").click(function() {
    return currentId;
  });
  // return value 
}

// shuffeling
 // this.cardFlip = 1 + Math.floor(Math.random() * 8);

  // let card = document.getElementsByClassName("card");






// deal cards randomly
// player 1 turn 
// pick card 1 -- shows 
// pick card 2  -- shows
//   if 1 == 2 -->  add cards to player's array
//   else ...  cards flip back over  
// switch player 
// no more cards = game end (calculate score)