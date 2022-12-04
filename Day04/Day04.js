const fs = require('fs');

let data = fs.readFileSync('E:\\dev\\AdventOfCode2022\\Day04\\Day04Input.txt', 'utf8');
const arr = data.split('\r\n');
console.log(arr);

//iterate through each pair
//split the pair by commas
//look at each pair
// get the range for each seperate pair
// see if the pairs are in range
function solvePartOne(arr){

    let result = 0;

    arr.forEach(pair => {

        let ranges = pair.split(',');

        let elf1 = ranges[0].split('-');
        let elf2 = ranges[1].split('-');

        if(Number(elf1[0]) >= Number(elf2[0]) && Number(elf1[1]) <= Number(elf2[1])){
            result++;
        }
        else if(Number(elf2[0]) >= Number(elf1[0]) && Number(elf2[1]) <= Number(elf1[1])){
            result++;
        }
    });

    return result;

}

function solvePartTwo(arr){
    let result = 0;

    arr.forEach(pair => {

        let ranges = pair.split(',');

        let elf1 = ranges[0].split('-');
        let elf2 = ranges[1].split('-');
        
        //2-4, 6-8 => +0
        //5-7, 7-9 => +1
        if(Number(elf1[0]) >= Number(elf2[0]) && Number(elf1[1]) <= Number(elf2[1])){
            result++;
        }
        else if(Number(elf2[0]) >= Number(elf1[0]) && Number(elf2[1]) <= Number(elf1[1])){
            result++;
        }
        else if(Number(elf1[1]) >= Number(elf2[0])){
            result++;
        }
        else if(Number(elf1[0]) >= Number(elf2[0])){
            result++;
        }
    });


    return result;
}

console.log(solvePartOne(arr));
console.log(solvePartTwo(arr));
