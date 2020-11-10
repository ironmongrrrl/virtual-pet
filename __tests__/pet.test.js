const Pet = require('../src/pet');
    
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
})

describe('walk', () => {
    let pet;
    beforeEach (() => {
        pet = new Pet('Fido');
    })
           
    it('increases the fitness of the pet by 4', () => {
        pet.fitness = 0;
        pet.walk();
        expect(pet.fitness).toEqual(4);
    })
    
    it('increases the fitness of the pet by 4, but tops out at 10', () => {
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    })
})

describe('feed', () => { 
    let pet;
    beforeEach (() => {
        pet = new Pet('Fido');
    })

    it('decreases the hunger of the pet by 3', () => {
        pet.hunger = 10;
        pet.feed()   
        expect(pet.hunger).toEqual(7);
    })

    it('decreases the hunger of the pet by 3 but wont go lower than 0', () => {
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    })
})

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

})