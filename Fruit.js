class Fruit {
    constructor(_name,_weight) {
        this.name = _name;
        this.weight = _weight;
    }

    decrease(value){
        this.weight-=value;
    }

    getWeight(){
        return this.weight;
    }


    isEmpty(){
        if(this.weight > 0){
            return false;
        }
        return true;
    }
}
