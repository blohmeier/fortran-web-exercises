`use strict`;
/* -->
// Write a loop that outputs the first 50 fibonacci numbers. // https://en.wikipedia.org/wiki/Fibonacci_number // Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.
 */
// let num1 = 0, num2 = 1, nextNum;
// for (let i = 1; i <= 50; i++) {
//     console.log("Fibonacci Sequence at term " + i + " results in: " + num1);
//     nextNum = num1 + num2;
//     num1 = num2;
//     num2 = nextNum;
// }
/* -->
// Write the code necessary to output the first 50 prime numbers // Recommend starting your loop at 1 and ending your loop once you've calculated 50 primes. // https://en.wikipedia.org/wiki/Prime_number
 */
var k = 1;
for (let i = 1; i <= 230; i++) {
    let isPrime = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = 1;
            break;
        }
    }
    if (i > 1 && isPrime == 0) {
        console.log("Prime number " + k + " is " + i);
        k++;
    }
}