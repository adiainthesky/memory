
  
export default function dealCards() {
  for (let rows = 0; rows < 8; rows++) {
    currentId +=1;
    $("#table").append("<div class='card' id = " + currentId  +"></div>");
  };

  
  currentId = 0;
  for (let rows = 0; rows < 8; rows++) {
    currentId +=1;
    $("#table").append("<div class='card' id = " + currentId  +"></div>");
  };

