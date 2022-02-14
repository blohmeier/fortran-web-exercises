// function findAverage(input) {
//     for (i = 0; i = input.length - 1; i++) {
//         console.log(input.length);
//         var avg = input[i] + input[i + 1];
//         console.log(avg);
//         i++;
//     }
//     return (avg / (input.length - 1));
// }
// function findAverage (input) {
//     return input.reduce((a,b) => a + b, 0) / input.length;
// }
//corrected effort
"use strict";
function findAverage(grades) {
    let sum = 0;
    // grades.forEach(function(grade) {
    //     sum += grade;
    // })
    // option 2 - for i
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length
}
console.log(findAverage([95, 74, 86, 100]));