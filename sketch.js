var hypnoticBall, database;
var position;
var playerCount=0,gameState=0

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game()
game.getState()
game.start()
  
} 