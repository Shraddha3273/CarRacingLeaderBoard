class Game{
    constructor(){

    }
getState(){
  var gameStateref = database.ref('gameState');
  gameStateref.on("value",function(data){
      gameState = data.val();
  })  
}
update(state){
    database.ref('/').update({
        gameState : state
    })
}
async start(){
    if(gameState === 0){
player = new Player();
var playerCountref = await database.ref('playerCount').once("value");
if(playerCountref.exists()){
playerCount = playerCountref.val();

player.getCount();
}
form = new Form();
form.display();
    }

car1 = createSprite(100,200);
car2 = createSprite(300,200);
car3 = createSprite(500,200);
car4 = createSprite(700,200);

car1.addImage("car1",car1img);
car2.addImage("car2",car2img);
car3.addImage("car3",car3img);
car4.addImage("car4",car4img);
// array for cars.
cars = [car1,car2,car3,car4] 
}
play(){
    form.hide();
    text("Game BEGINS",200,100);
    Player.getPlayerInfo();

    player.CarsAtEnd();
    

    if(allPlayers !== undefined){
        background("turquoise");
        image(trackjpg,0,-displayHeight*3,displayWidth,displayHeight*5);
        // y posion to list the players
        //var displayPosition = 150;
        // plr is the new variable used for the array of allPlayers.
        var index = 0,x = 150,y;
        for(var plr in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if(index === player.index){
            fill("green");
            ellipse(x,y,100,100);
            cars[index - 1].shapeColor = "green";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index - 1].y;

        }
           /* if(plr === "player" + player.index){
            fill("cyan")
            }
            else{
                fill("black")
            }
        // [] are used for arrays.
        displayPosition += 20;
        text(allPlayers[plr].name + "-" + allPlayers[plr].distance,150,displayPosition); */
        }
    }

if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance += 50;
player.update();
}
if(player.distance > 3250){
    gameState = 2;
    player.rank += 1;
    Player.UpdateCarsAtEnd(player.rank);
    game.update(2);
}
drawSprites();

}
end(){
    console.log("GaME OvER");
    
    console.log(player.rank);   
}
}





