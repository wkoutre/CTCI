// 'Max' is the maximum number of items a single sub-stack in the master stack should have.

class StackPlates {
	constructor(max) {
		this.stack = [[]];
		this.curStack = 0;
		this.max = max;
	}

	push(item) {
		if (this.stack[this.curStack].length === this.max){
			this.curStack++;
			this.stack.push([]);
		}
		this.stack[this.curStack].push(item);
	}

	pop() {
		if (this.stack[this.curStack].length === 0 && this.curStack === 0)
			throw new Error ('Nothing to pop.');

		let ret = this.stack[this.curStack].pop();

		if (this.stack[this.curStack].length === 0 && this.curStack > 0){
			this.stack.pop();
			this.curStack--;
		}

		return ret;
	}

	peek() {
		if (this.stack[this.curStack].length === 0 && this.curStack === 0)
			throw new Error ('Nothing to peek.');

		let len = this.stack[this.curStack].length - 1;
		return this.stack[this.curStack][len];
	}

	isEmpty() {
		return (this.curStack === 0 && this.stack[0].length === 0);
	}
}

module.exports = { StackPlates };