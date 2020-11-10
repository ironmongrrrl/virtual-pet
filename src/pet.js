const maximumFitness = 10;
const minimumHunger = 0;
const petHungry = 5;
const petUnFit = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = minimumHunger;  
    this.fitness = maximumFitness;
};

Pet.prototype.growUp = function() {
    this.age +=1; 
    this.hunger +=5;
    this.fitness -=3;
}

Pet.prototype.walk = function () {
    if ((this.fitness + 4) <= maximumFitness) {
        this.fitness += 4;
    } else {
        this.fitness = maximumFitness;
    }
}

Pet.prototype.feed = function () {
    if ((this.hunger - 3) >= minimumHunger) {
        this.hunger -= 3;
    } else {
        this.hunger = minimumHunger;
    }
}

Pet.prototype.checkUp = function () {
    if (this.fitness <= petUnFit && this.hunger >= petHungry) {
        return 'I am hungry AND I need a walk'
    } else if (this.fitness <= petUnFit) {
        return 'I need a walk' 
    } else if (this.hunger >= petHungry) {
        return 'I am hungry'
    } else return 'I feel great!'
}

module.exports = Pet;