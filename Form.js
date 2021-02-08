class Form {
    constructor(){
        this.title = createElement('h2')
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.button2 = createButton("Select");
        this.button3 = createButton("Select");
        this.button4= createButton("Continue");
        this.button5 = createButton("Continue");
        this.button6 = createButton("Continue"); 
        this.greeting = createElement("h3");
    }


    hide(){

        this.button5.hide();
        this.button4.hide();
        this.button3.hide();
        this.button2.hide();
        this.button.hide();
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h1')
        this.title.html("Demon slayer");

        this.title.position(displayWidth/2 - 220, - 40);
        this.title.style('font-size', '70px');
        this.title.style('color', 'cyan');


      
        this.input.position(displayWidth/2 - 140 , displayHeight/2 - 60);
        this.input.style('width', '300px');
        this.input.style('height', '50px');
        this.input.style('background', 'lavender');
        this.input.style('font-size', '30px');

        this.button.position(displayWidth/2 - 90 , displayHeight/2 + 60);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('font-size', '20px');
    
        this.button2.position(displayWidth/2 + 283 , displayHeight/2 + 60);
        this.button2.style('width', '234px');
        this.button2.style('height', '40px');
        this.button2.style('font-size', '20px');
    
        this.button3.position(displayWidth/2 - 116 , displayHeight/2 + 60);
        this.button3.style('width', '234px');
        this.button3.style('height', '40px');
        this.button3.style('font-size', '20px');

        this.button4.position(displayWidth/2 + 416 , displayHeight/2 + 320);
        this.button4.style('width', '100px');
        this.button4.style('height', '40px');
        this.button4.style('font-size', '20px');

        this.button5.position(displayWidth/2 + 416 , displayHeight/2 + 320);
        this.button5.style('width', '100px');
        this.button5.style('height', '40px');
        this.button5.style('font-size', '20px');
      
        this.button6.position(displayWidth/2 + 416 , displayHeight/2 + 320);
        this.button6.style('width', '100px');
        this.button6.style('height', '40px');
        this.button6.style('font-size', '20px');
      
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide();

        this.button.mousePressed(()=>{
            gameState = 1;
            this.input.hide();
            this.button.hide();
            this.button2.show();
            this.button3.show();
            this.title.hide();
            this.button4.show();
        })

       this.button2.mousePressed(()=>{
            gameState = "story";
            player = "inosuke";
            this.button2.hide();
            this.button3.hide();
            this.title.hide();
            this.button4.show();
        })


        this.button3.mousePressed(()=>{
            gameState = "story";
            player = "Rengoku";
            this.button2.hide();
            this.button3.hide();
            this.title.hide();
            this.button4.show();

        })

        this.button4.mousePressed(()=>{
            gameState = "story2";
              this.button5.show();
              this.button4.hide();
        })

        this.button5.mousePressed(()=>{
            gameState = "story3";
            this.button5.hide();
            this.button6.show();
        })

        this.button6.mousePressed(()=>{
            gameState = 3;
            this.button6.hide();
        })

    }
}