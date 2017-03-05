class Stack {
	constructor() {
		this.stack = [];
		this.min = [];
	}

	pop() {

		if (this.isEmpty()){
			throw new Error('Nothing to pop.');
		}

		let last = this.stack.length - 1;
		let ret = this.stack[last];

		if (this.min[this.min.length - 1] === ret){
			this.min.pop();
		}

		this.stack.length = last;
		return ret;
	}

	push(item) {
		if (this.min.length === 0){
			this.min.push(item);
			this.stack.push(item);
		} else {
			this.stack.push(item);
			if (item <= this.min[this.min.length - 1]){
				this.min.push(item);
			}
		}
	}

	peek() {
		if (this.isEmpty()){
			throw new Error('Nothing to peek at.');
		}
		return this.stack[this.stack.length - 1];
	}

	isEmpty() {
		return this.stack.length === 0;
	}

	mini() {
		if (this.min.length === 0){
			throw new Error('Nothing to peek at.');
		}
		return this.min[this.min.length - 1];
	}

	length(){
		return this.stack.length;
	}
}

module.exports = { Stack }