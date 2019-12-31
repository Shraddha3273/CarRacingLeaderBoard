class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
        }

    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",(data) =>{
            playerCount = data.val();
        })  
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(){
var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        name : this.name,
        distance : this.distance
    })
    }
    /* static functions are called by 'class' themselves rather than by
     the object of the class*/
    static getPlayerInfo(){

      var playerInforef = database.ref('players');
        playerInforef.on("value",(data) => {
            allPlayers = data.val();
        })  
    }
    CarsAtEnd(){
        database.ref('CarsAtEnd').on("value",(data)=> {
            this.rank = data.val();
        })
    }
   static UpdateCarsAtEnd(rank){
        database.ref('/').update({
            CarsAtEnd : rank
        })
    }

}
 