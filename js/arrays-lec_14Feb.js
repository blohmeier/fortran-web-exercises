"use strict";
let numbers = [1, 2, 3, 4, 5, 6];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

let instructors = ['Casey', 'DocRob', 'Ry', 'Jay', 'David'];

instructors.sort();

console.log(instructors);

numbers.sort();

console.log(numbers);

// Splitting and joining

let userInfo = "ry,sutton,08/11/1994,ryasutton,ford,mustang";

//let userInfoArr = userInfo.split(`,`);
let userInfoArr = userInfo.split(``);

console.log(userInfoArr);