const fs = require('fs');

let data = fs.readFileSync('Day01Input.txt', 'utf8');

const arr = data.split('\n');

console.log(arr);

let currentElfTotal = 0;
let elfTotals = [];

arr.forEach(cal => {
    if(cal == '')
    {
        elfTotals.push(currentElfTotal);
        currentElfTotal = 0;
    }
    else
    {
        currentElfTotal += Number(cal);
    }
})

elfTotals.sort((a, b) => b - a);


console.log(elfTotals);
let sumTopThree = elfTotals.slice(0, 3).reduce((sum, x) => sum + x, 0)
console.log(sumTopThree);