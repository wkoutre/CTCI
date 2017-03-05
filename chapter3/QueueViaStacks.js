const { Stack } = require('./Stack');

class Queue {
	constructor(){
		this.oldest = new Stack();
		this.newest = new Stack();
	}

	add(item) {
		this.newest.push(item);
	}

	_shiftStacks() {
		if (this.oldest.isEmpty()){
			while (!this.newest.isEmpty()){
				this.oldest.push(this.newest.pop());
			}
		}
	}

	remove() {
		this._shiftStacks();
		if (this.oldest.stack.length === 0){
			throw new Error('Nothing to remove');
		}
		return this.oldest.pop();
	}

	peek() {
		if (this.newest.length === 0 && this.oldest.length === 0)
			throw new Error('Nothing to peek.');
		this._shiftStacks();
		return this.oldest.stack[this.oldest.length() - 1];
	}

	isEmpty() {
		return (this.newest.length() === 0 && this.oldest.length() === 0);
	}
}

module.exports = { Queue };