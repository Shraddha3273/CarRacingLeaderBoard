class Form {
constructor(){
    this.input = createInput("Your Name");
    this.button = createButton("Press Me");
    this.Greeting = createElement('h2');
    this.reset = createButton("RESET");
}
hide(){
    this.Greeting.hide();
    this.input.hide();
    this.button.hide();
}

display(){
    var title = createElement('h2');
    title.html("Speeding Cars");
   title.position(displayWidth/2 - 50,0);

    this.input.position(displayWidth/2 - 30,displayHeight/2 - 80);

    this.button.position(displayWidth/2 + 30,displayHeight/2);
    this.reset.position(displayWidth,200);

    this.reset.mousePressed(()=>{
        // line No.26 = arguments passed to the function of the class. 
        player.updateCount(0);
        game.update(0);
    
    })

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        
       this.Greeting.html("Hello" + player.name);
        this.Greeting.position(displayWidth/2 - 50,displayHeight/2);


    })
}
}