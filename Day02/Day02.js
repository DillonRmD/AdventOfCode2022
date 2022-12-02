const fs = require('fs');

let data = fs.readFileSync('E:\\dev\\AdventOfCode2022\\Day02\\Day02Input.txt', 'utf8');
const arr = data.split('\r\n');
console.log(arr);


//A : Rock
//B : Paper
//C : Scissors

// Rock, => 1 pt
// Paper => 2 pt
// Scissors => 3 pt

//X: Lose
//Y: Draw
//Z: Win

//Win => 6 pts
//Draw => 3 pts
//Loss => 0 pts

let score = 0;
arr.forEach(round => {

    let oppChoice = round.charAt(0);
    let playerChoice = round.charAt(2);
    
    if (oppChoice == 'A') { // rock
        if (playerChoice == 'X') // lose
            score += (0 + 3); //scissors => 3pts
        else if (playerChoice == 'Y') // draw
            score += (3 + 1); //rock => 1pt
        else if (playerChoice == 'Z') // win
            score += (6 + 2); //paper => 2pt
    }
    else if (oppChoice == 'B') { // paper
        if (playerChoice == 'X') //lose
            score += (0 + 1); //rock => 1pt
        else if (playerChoice == 'Y') //draw
            score += (3 + 2); //paper => 2pt
        else if (playerChoice == 'Z') //win
            score += (6 + 3); //scissors => 3pt
    }
    else if (oppChoice == 'C') { //scissors
        if (playerChoice == 'X') //lose
            score += (0 + 2); //paper => 2pts
        else if (playerChoice == 'Y') //draw
            score += (3 + 3); //scissors => 3pts
        else if (playerChoice == 'Z') // win
            score += (6 + 1); //rock => 1pt
    }
})

console.log(score);