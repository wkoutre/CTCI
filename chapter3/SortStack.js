const { Stack } = require('./Stack');

const sortStack = (s) => {
	if (!s)
		throw new Error('Invalid stack.');

	let hold = new Stack();
	let s_len = s.stack.length;
	for (let i = 0; i < s_len; i++){
		var small = Infinity;
		let skipped = false;
		while (s.length() > 0){
			let cur = s.pop();
			if (cur < small){
				small = cur;
			}
			hold.push(cur);
		}
		while (hold.length() > i){
			let item = hold.pop();
			if (item === small && !skipped){
				skipped = !skipped;
			} else {
				s.push(item);
			}
		}
		hold.push(small);
	}

	for (let i = 0; i < s_len; i++){
		s.push(hold.pop());
	}

	return s;
}

module.exports = { sortStack };