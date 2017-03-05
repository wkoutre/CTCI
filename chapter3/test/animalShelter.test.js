const chai = require('chai');
const assert = chai.assert;
const { AnimalShelter, Cat, Dog } = require('../AnimalShelter');

describe('AnimalShelter adds dogs and cats correctly', () => {
	it('Should add a cat', () => {
		let cat = new Cat('Pickle');
		let cat2 = new Cat('Calico');
		let shelter = new AnimalShelter();

		shelter.enqueue(cat);
		assert.equal(shelter.cats.head.data.name, 'Pickle');
		shelter.enqueue(cat2);
		assert.equal(shelter.cats.head.data.name, 'Pickle');
		assert.equal(shelter.cats.last.data.name, 'Calico');
	});

	it('Should add a dog', () => {
		let one = new Dog('Rover');
		let two = new Dog('Spot');
		let shelter = new AnimalShelter();

		shelter.enqueue(one);
		assert.equal(shelter.dogs.head.data.name, 'Rover');
		shelter.enqueue(two);
		assert.equal(shelter.dogs.head.data.name, 'Rover');
		assert.equal(shelter.dogs.last.data.name, 'Spot');
	});

	it('Should dequeue a random animal', () => {
		let one = new Dog('Rover');
		let two = new Dog('Spot');
		let three = new Cat('Pickle');
		let four = new Cat('Calico');
		let shelter = new AnimalShelter();

		let arr = [one, two, three, four];
		for (a of arr){
			shelter.enqueue(a);
		}

		assert.equal(shelter.adopt().name, 'Rover');
		assert.equal(shelter.dogs.head.data.name, 'Spot');
	});

	it('Should dequeue a dog correctly', () => {
		let one = new Dog('Rover');
		let two = new Dog('Spot');
		let three = new Cat('Pickle');
		let four = new Cat('Calico');
		let shelter = new AnimalShelter();

		let arr = [one, two, three, four];
		for (a of arr){
			shelter.enqueue(a);
		}

		assert.equal(shelter.adopt('dog').name, 'Rover');
		assert.equal(shelter.dogs.head.data.name, 'Spot');
	});

	it('Should dequeue a cat correctly', () => {
		let one = new Dog('Rover');
		let two = new Dog('Spot');
		let three = new Cat('Pickle');
		let four = new Cat('Calico');
		let shelter = new AnimalShelter();

		let arr = [one, two, three, four];
		for (a of arr){
			shelter.enqueue(a);
		}

		assert.equal(shelter.adopt('cat').name, 'Pickle');
		assert.equal(shelter.cats.head.data.name, 'Calico');
	});

	it('Should handle empty dogs and cats lists', () => {
		let shelter = new AnimalShelter();
		let dog = () => {
			return shelter.adopt('dog').name;
		}
		let cat = () => {
			return shelter.adopt('cat').name;
		}

		assert.throws(dog, Error);
		assert.throws(cat, Error);

		// entering a dog; enqueuing it and checking;  dequeing it; checking for error
		let one = new Dog('Rover');
		shelter.enqueue(one);
		assert.equal(shelter.adopt('dog').name, 'Rover');
		assert.throws(dog, Error);

		// entering a cat; enqueuing it and checking; dequeing it; checking for error
		let three = new Cat('Pickle');
		shelter.enqueue(three);
		assert.equal(shelter.adopt('cat').name, 'Pickle');
		assert.throws(cat, Error);
	});
});