class Ninja {
    constructor(name,health, speed,strength){
    this.name=name;
    this.health=health;
    this.speed=speed;
    this.strength=strength;
}
sayName(){
    console.log(this.name);
}
showStats() 
{
    console.log(this.name + " " + this.health + " " + this.speed + " " + this.strength);
}
drinkSake(){
    this.health +=10;
}
}

class Sensei extends Ninja {
    constructor(){
    super("Sensei",200,10,10);
    this.wisdom=10;

    }
    speakWisdom(){
        super.drinkSake;
        console.log("hola!");
    }
    
}