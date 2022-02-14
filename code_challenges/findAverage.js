// function findAverage(input) {
//     for (i = 0; i = input.length - 1; i++) {
//         console.log(input.length);
//         var avg = input[i] + input[i + 1];
//         console.log(avg);
//         i++;
//     }
//     return (avg / (input.length - 1));
// }
function findAverage (input) {
    return input.reduce((a,b) => a + b, 0) / input.length;
}
console.log(findAverage([95, 74, 86, 100]));