`use strict`;
/* -->
// Write a loop that outputs the first 50 fibonacci numbers. // https://en.wikipedia.org/wiki/Fibonacci_number // Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.
 */
//Attempt 1
// function first50fib1 () {
//     let num1 = 0, num2 = 1, nextFib;
//     for (let i = 1; i <= 50; i++) {
//         console.log("Fibonacci Sequence at term " + i + " results in: " + num1);
//         nextFib = num1 + num2;
//         num1 = num2;
//         num2 = nextFib;
//     }
// }
// first50fib1 ();

// Attempt 2: recursive algo - TOO SLOW! Time complexity is exponential: O(2^N).
// function fibonacci(element) {
//     if (element === 0) return 0;
//     if (element === 1) return 1;
//     return fibonacci(element - 2) + fibonacci(element - 1);
// }
// function first50fib2 () {
//     for (let i = 1; i <= 50; i++) {
//         console.log("Fibonacci Sequence at term " + i + " results in: " + fibonacci(i));
//     }
// }
// first50fib2 ();

//Attempt 3: Recursive with Memoization - much faster.
function fibonacci(element, cache = []) {
    if (element === 0) return 0;
    if (element === 1) return 1;
    if (cache[element]) return cache[element];

    cache[element] = fibonacci(element - 2, cache) + fibonacci(element - 1, cache);
    return cache[element];
}
function first50fib3 () {
    for (let i = 1; i <= 50; i++) {
        console.log("Fibonacci Sequence at term " + i + " results in: " + fibonacci(i));
    }
}
first50fib3 ();

/* -->
// Write the code necessary to output the first 50 prime numbers // Recommend starting your loop at 1 and ending your loop once you've calculated 50 primes. // https://en.wikipedia.org/wiki/Prime_number
 */
//Attempt 1: Not working (incorrectly says 1 is prime).
// for (let i = 1, k = 1; k <= 50; i++) {
//     let isPrime = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             isPrime = 1;
//             break;
//         }
//     }
//     if (isPrime == 0) {
//         console.log("Prime number " + k + " is " + i);
//         k++;
//     }
// }
// Attempt 2: works for all values.
// for (let i = 1, k = 1; k <= 50; i++) {
//     if (test_prime(i)) {
//         console.log("Prime number " + k + " is " + i);
//         k++;
//     }
//
// }
// function test_prime(n)
// {
//     if (n===1) {
//         return false;
//     }
//     else if (n === 2) {
//         return true;
//     } else {
//         for(let x = 2; x < n; x++) {
//             if(n % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

//console.log(test_prime(37));
// console.log(roughSizeOfObject(k));
// function roughSizeOfObject( object ) {
//
//     var objectList = [];
//     var stack = [object];
//     var bytes = 0;
//
//     while (stack.length) {
//         var value = stack.pop();
//
//         if (typeof value === 'boolean') {
//             bytes += 4;
//         } else if (typeof value === 'string') {
//             bytes += value.length * 2;
//         } else if (typeof value === 'number') {
//             bytes += 8;
//         } else if
//         (
//             typeof value === 'object'
//             && objectList.indexOf(value) === -1
//         ) {
//             objectList.push(value);
//
//             for (var i in value) {
//                 stack.push(value[i]);
//             }
//         }
//         return bytes;
//     }
// }