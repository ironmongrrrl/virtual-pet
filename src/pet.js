// SOME STANDARDS //
const maximumFitness = 10;
const minimumHunger = 0;
const petHungry = 5;
const petUnFit = 3;
const petDeadMessage = 'Your pet is no longer alive :('

// THE PET CONSTRUCTOR //
class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = minimumHunger;  
        this.fitness = maximumFitness;
        this.children = [];
};

// THE IS ALIVE GETTER METHOD //
get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
};

// THE GROW UP FUNCTION //
growUp() {
    if(!this.isAlive) {
        throw new Error(petDeadMessage);
    } 
    this.age +=1; 
    this.hunger +=5;
    this.fitness -=3;
};

// THE WALK FUNCTION //
walk() {
    if(!this.isAlive) {
        throw new Error(petDeadMessage);
    }
    else if ((this.fitness + 4) <= maximumFitness) {
        this.fitness += 4;
    } else {
        this.fitness = maximumFitness;
    }
};

// THE FEED FUNCTION //
feed() {
    if(!this.isAlive) {
        throw new Error(petDeadMessage);
    }
    else if ((this.hunger - 3) >= minimumHunger) {
        this.hunger -= 3;
    } else {
        this.hunger = minimumHunger;
    }
};

// THE PET CHECK UP FUNCTION //
checkUp() {
    if(!this.isAlive) {
        throw new Error(petDeadMessage);
    }
    else if (this.fitness <= petUnFit && this.hunger >= petHungry) {
        return 'I am hungry AND I need a walk'
    } else if (this.fitness <= petUnFit) {
        return 'I need a walk' 
    } else if (this.hunger >= petHungry) {
        return 'I am hungry'
    } else return 'I feel great!'
};

// ADOPT CHILD FUNCTION // 
adoptChild(child) {
    if(!this.isAlive) {
        throw new Error(petDeadMessage);
    }
    this.children.push(child);
};

// HAVE BABY FUNCTION // 
haveBaby(child) {
    if(!this.isAlive) {
        throw new Error(petDeadMessage);
    }
    this.children.push(new Pet (child));
};
};

module.exports = Pet;