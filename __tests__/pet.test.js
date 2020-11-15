let Pet = require('../src/pet');

// THE PET CONSTRUCTOR //
describe('constructor', () => {
    let pet;
    pet = new Pet('Fido');
    
    it('returns an object', () => {
       expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
       expect(pet.name).toEqual('Fido');      
    })

    it('has a initial age of 0', () => {
       expect(pet.age).toEqual(0);
    });
}); 

// THE GROW UP FUNCTION //
describe('growUp', () => {
    let pet;
    pet = new Pet('Fido');
    pet.growUp();

    it('increments the age of the pet by 1 year', () => {
        expect(pet.age).toEqual(1);
    })

    it('increments the hunger of the pet by 5', () => {
          expect(pet.hunger).toEqual(5);
    })

    it('decreases the fitness of the pet by 3', () => {
        expect(pet.fitness).toEqual(7);
    })

    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

// THE WALK FUNCTION //
describe('walk', () => {
    let pet;
    beforeEach (() => {
        pet = new Pet('Fido');
    })
           
    it('increases the fitness of the pet by 4', () => {
        pet.fitness = 1;
        pet.walk();
        expect(pet.fitness).toEqual(5);
    })
    
    it('increases the fitness of the pet by 4, but tops out at 10', () => {
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    })

    it('throws an error if the pet is not alive', () => {
        pet.fitness = 0;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

// THE FEED FUNCTION //
describe('feed', () => { 
    let pet;
    beforeEach (() => {
        pet = new Pet('Fido');
    })

    it('decreases the hunger of the pet by 3', () => {
        pet.hunger = 9;
        pet.feed()   
        expect(pet.hunger).toEqual(6);
    })

    it('decreases the hunger of the pet by 3 but wont go lower than 0', () => {
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    })

    it('throws an error if the pet is not alive', () => {
        pet.hunger = 11;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

// THE PET CHECK UP FUNCTION //
describe('checkUp', () => {
    let pet;
    beforeEach (() => {
        pet = new Pet('Fido');
    })

    it('tells us \"I need a walk\" if the fitness gets to 3 or less', () => {
        pet.hunger = 0;
        pet.fitness = 2;
        expect(pet.checkUp()).toEqual('I need a walk');
    })

    it('tells us \"I am hungry\" if the hunger gets to 5 or more', () => {
        pet.hunger = 5;
        pet.fitness = 10;
        expect(pet.checkUp()).toEqual('I am hungry');
    })

    it('tells us \"I am hungry AND I need a walk\" if the hunger gets to 5 or more and also fitness to 3 or less', () => {
        pet.fitness = 2;
        pet.hunger = 5;
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    })

    it('If neither the hunger is at 5 or more and the fitness is not at 3 or less, return \"I feel great!\"', () => {
        pet.fitness = 4;
        pet.hunger = 4;
        expect(pet.checkUp()).toEqual('I feel great!');
    })

    it('throws an error if the pet is not alive', () => {
        pet.hunger = 11;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

// THE IS ALIVE GETTER METHOD //
describe('isAlive', () => {
    let pet;
    beforeEach (() => {
        pet = new Pet('Fido');
    })

    it('returns false if the pet\'s fitness is 0 or less', () => {
        pet.fitness = 0;
        expect(pet.isAlive).toEqual(false);
    })

    it('returns true if the pet\'s fitness is 1 or more', () => {
        pet.fitness = 1;
        expect(pet.isAlive).toEqual(true);
    })

    it('returns false if the pet\'s hunger is 10 or more', () => {
        pet.hunger = 11;
        expect(pet.isAlive).toEqual(false);
    })

    it('returns true if the pet\'s hunger is 9 or less', () => {
        pet.hunger = 9;
        expect(pet.isAlive).toEqual(true);
    })

    it('returns false if the pet\'s age is 30 or more', () => {
        pet.age = 30;
        expect(pet.isAlive).toEqual(false);
    })

    it('returns true if the pet\'s age is 29 or less', () => {
        pet.age = 29;
        expect(pet.isAlive).toEqual(true);
    });
});