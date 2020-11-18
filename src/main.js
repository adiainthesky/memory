import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Player from './js/game.js';
import dealCards from './js/table.js';

let currentId = 0 
let player1 = new Player();
let player2 = new Player(); 

$(document).ready(function(){
  deal();
  player1.name = prompt("Please enter your name:");
  player2.name = prompt("Please enter your name:");
  // player1.turn();
});



