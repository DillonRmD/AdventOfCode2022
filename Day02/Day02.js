const fs = require('fs');

let data = fs.readFileSync('Day02Input.txt', 'utf8');
const arr = data.split('\n');
console.log(arr);

const ScoreMap = 
{
    "Win" : 6,
    "Draw": 3,
    "Loss": 0, 
};

const ShapeMap = 
{
    "Y": 1,
    "X": 2,
    "Z": 3
};