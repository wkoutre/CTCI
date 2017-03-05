const { List } = require('../chapter2/LinkedLists');

class AnimalShelter {
	constructor() {
		this.dogs = null;
		this.cats = null;
		this.count = 0;
	}

	enqueue(animal) {
		if (animal.type === 'cat'){
			if (this.cats === null){
				this.cats = new List(animal)
				this.cats.number = this.count;
				this.count++;
			} else {
				this.cats.pushBack(animal);
				this.cats.number = this.count;
				this.count++;
			}

		} else if (animal.type === 'dog') {
			if (this.dogs === null){
				this.dogs = new List(animal)
				this.dogs.number = this.count;
				this.count++;
			} else {
				this.dogs.pushBack(animal);
				this.dogs.number = this.count;
				this.count++;
			}
		} else {
			throw new Error('We only accept dogs and cats.')
		}
	}

	adoptTop() {
		let dogNum = this.dogs.number;
		let catNum = this.cats.number;
		let ret = null;

		if (dogNum < catNum){
			ret = this.dogs.getFront().data;
		} else {
			ret = this.cats.getFront().data;
		}

		return ret;
	}

	adopt(type){
		if (type === undefined){
			return this.adoptTop();
		} else {
			if (type === 'cat'){
				if (this.cats && this.cats.length > 0)
					return this.cats.getFront().data;
				else
					throw new Error('Sorry, no cats left.');
			} else if (type === 'dog'){
				if (this.dogs && this.dogs.length > 0)
					return this.dogs.getFront().data;
				else
					throw new Error('Sorry, no dogs left.');
				return this.dogs.getFront().data;
			} else {
				throw new Error('Only dogs and cats are housed here.');
			}
		}
	}	
}

class Animal {
	constructor(name){
		this.name = name;
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
		this.type = 'cat';
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
		this.type = 'dog';
	}
}

module.exports = { AnimalShelter, Dog, Cat };