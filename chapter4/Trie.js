class TrieNode {
	constructor(data) {
		this.data = data;
		this.isCompleted = false;
		this.path = {};
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode(null);
		this.globalPath = {};
		this.fullWords = new Set();
	}

	// Given an array, adds each word into the Trie

	addArray(arr){
		if (arr.length < 1 || typeof arr !== 'object')
			throw new Error('addArray takes an array of strings (words) to be added to the Trie');

		for (let word of arr){
			this.add(word);
		}
	}

	add(word){
		if (this.fullWords.has(word))
			return ;

		let dummyRoot = this.root;
		let prevPath;
		let wordCopy = "";

		if (word.length < 1)
			return ;

		// word's first letter isn't in the Trie

		if (this.root.path[word[0]] === undefined){
			let route = new TrieNode(word[0]);
			wordCopy += word[0];
			this.root.path[wordCopy] = route;
			this.globalPath[wordCopy] = route;
			for (let i = 1; i < word.length; i++){
				wordCopy += word[i];
				let curNode = new TrieNode(wordCopy);
				route.path[wordCopy] = curNode;
				this.globalPath[wordCopy] = curNode;
				route = route.path[wordCopy];	
			}
			this.fullWords.add(word);
			route.isCompleted = true;

		// Word's first letter is already in the Trie

		} else {

			/* 	
			**	I could potentially make it quicker by implementing a binary search here
			**	to find the greatest slice of "word" that's already in the Trie. Also must
			**	take into consideration the time taken for each call to "word.slice"
			*/

			let oldWord = word[0],
				i = 0,
				// start = 0,
				// mid = Math.floor(word.length/2),
				newWord = "",
				route;


			while (i < word.length){
				newWord += word[i];

				if (this.globalPath[newWord] === undefined || word.length - i === 1) {
					// console.log('oldWord:', oldWord);
					route = this.globalPath[oldWord];
					break ;
				} else {
					oldWord = newWord;
					i++;
				}
			}

			let routeLen = route.data.length;
			let routeData = route.data;
			// console.log('RouteData:', routeData);

			for (routeLen; routeLen < word.length; routeLen++){
				routeData += word[routeLen];
				let curNode = new TrieNode(routeData);
				// if (Object.getOwnPropertyNames(route.path).length === 0){

				// }
				route.path[routeData] = curNode;
				this.globalPath[routeData] = curNode;
				route = route.path[routeData];				
			}
			this.globalPath[word].isCompleted = true;
			this.fullWords.add(word);
		}
	}

	printWords(){
		this.fullWords.forEach(word => console.log(word));
	}

	print(word){
		if (!this.fullWords.has(word))
			throw new Error(`${word} is not in thie Trie`);

		let copyWord = "";
		for (let i = 0; i < word.length; i++){
			copyWord += word[i];
			console.log(this.globalPath[copyWord]);
		}
	}
}

module.exports = { Trie };