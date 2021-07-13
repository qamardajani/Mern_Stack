class Card {
    constructor(name,cost)
    {
        this.name=name;
        this.cost=cost;
    }

}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;

    }
        attack(target) 
        {
            target.res -= this.power;

        }

}
class Effect extends Card {
    constructor(name,cost,text,stat,mag){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.mag=mag;

    }
    play( target ) {
        if( target instanceof Unit ) {
            console.log(this.text);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const unit1 = new Unit ("Red Belt Ninja",3,3,4)
const unit2 = new Unit ("Black Belt Ninja",4,5,4)
const effect1 = new Effect("Hard Algorithm",2, "increase target's resilience by 3","res", 3)
const effect2 = new Effect("Unhandled Promise Rejection	",1, "reduce target's resilience by 2","res", -2)
const effect3 = new Effect("Pair Programming",3, "increase target's power by 2	","power", 2)
effect1.play(unit1);
effect2.play(unit1);
effect3.play(unit2);
unit1.attack(unit2);


