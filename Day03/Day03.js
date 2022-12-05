const fs = require('fs');

let data = fs.readFileSync('Day03Input.txt', 'utf8').replace(/\r/g, "").trim().split('\n');

//lowercase items => a - z => 1 - 26 priority
//uppercase items => A - Z => 27 - 52 priority

const calculateValue = (char) => char.charCodeAt(0) - (char === char.toLowerCase() ? 96 : 38);

function solve1(data){
    return data.split(/(.+\n.+\n.+)/g).map(x => x.trim()).filter(x => x.length > 0).map(x => x.split('\n')).reduce((sum, group) => {
		const firstIndex = group.reduce((firstIndex, line, index) => line.length < group[firstIndex].length ? index : firstIndex, 0);
		const [second, third] = [0, 1, 2].filter(i => i !== firstIndex).map(i => new Set(group[i]));
		const commonItem = [...group[firstIndex]].find(char => second.has(char) && third.has(char));
		return sum + calculateValue(commonItem);
	}, 0)
}
function solve2(arr){
	let sum = 0;
	for(let i = 0; i < arr.length; i += 3)
	{
		const backpacks = [[...arr[i]], [...arr[i + 1]], [...arr[i + 2]]];

		let set = new Set(backpacks[0]);
		let intersection = backpacks[1].filter((x) => set.has(x));

		set = new Set(intersection);
		intersection = backpacks[2].filter((x) => set.has(x));

		const dedup = [...new Set(intersection)];

		sum += calculateValue(dedup[0]);
	}
	return sum;
}

console.log(solve2(data));