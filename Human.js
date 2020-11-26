class Human {
    constructor(_name, _gender, _weight) {
        this.name = _name;
        this.gender = _gender;
        this.weight = _weight;
        this.foodNum = 0;
    }

    isMale(){
        if(this.gender.toLowerCase() === 'male'){
            return true;
        }
        return false;
    }

    setGender(_gender){
        this.gender = _gender;
    }

    checkFruit(_fruit){
        if(_fruit.isEmpty()){
            return false;
        }
        return true;
    }

    eat(_fruit,number){
        if(this.checkFruit(_fruit)){
            if(number > _fruit.weight){
                number = _fruit.weight;
            }
            this.increaseWeight(number);
            _fruit.decrease(number);
            this.foodNum+=number;
        }else {
            this.say("Con gi dau ma an :'<");
        }
    }

    say(_content){
        alert(_content);
    }

    increaseWeight(value){
        this.weight+=value;
    }

    getWeight(){
        return this.weight;
    }
}

