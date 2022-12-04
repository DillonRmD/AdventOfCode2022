const fs = require('fs');

let data = fs.readFileSync('E:\\dev\\AdventOfCode2022\\Day03\\Day03Input.txt', 'utf8');
const arr = data.split('\r\n');
console.log(arr);

//lowercase items => a - z => 1 - 26 priority
//uppercase items => A - Z => 27 - 52 priority

const calculateValue = (char) => char.charCodeAt(0) - (char === char.toLowerCase() ? 96 : 38);

function solve(data){
    return data.split(/(.+\n.+\n.+)/g).map(x => x.trim()).filter(x => x.length > 0).map(x => x.split('\n')).reduce((sum, group) => {
		const firstIndex = group.reduce((firstIndex, line, index) => line.length < group[firstIndex].length ? index : firstIndex, 0);
		const [second, third] = [0, 1, 2].filter(i => i !== firstIndex).map(i => new Set(group[i]));
		const commonItem = [...group[firstIndex]].find(char => second.has(char) && third.has(char));
		return sum + calculateValue(commonItem);
	}, 0)
}

console.log(solve(data));