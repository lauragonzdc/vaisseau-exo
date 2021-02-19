function setup() {
    createCanvas(400, 400);
    
    
  }
  
  function draw() {
    background(0);
    x=mouseX
    y=mouseY
  
    let spaceship = 
    
     ellipse(x+100,y+30,60,60);
     fill(102);
     rect(x+20,y+15,50,25);//rect horizontal gauche
     rect(x+130,y+15,50,25);// rect horizontal droit
     rect(x,y,25,50);// rect vertical gauche référence
     rect(x+170,y,25,50); // rect vertical droit
     triangle(x, y, x+25, y, x+75, y-120);// triangle supérieur gauche
     triangle(x,y+50,x+25,y+50,x+50,y+200);// triangle inférieur gauche
     triangle(x+170, y+50, x+195, y+50, x+150,y+200); //triangle supérieur droit
     triangle(x+170,y,x+195,y,x+130,y-120);// triangle inférieur droit
     //noFill()
     ellipse (x+100,y+30,45,45),fill(255);  
  }