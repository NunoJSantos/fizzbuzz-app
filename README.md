# FizzBuzz
A program that, based in a number passed as an argument, it returns a string:

Rules:
1. Whenever the number is a multiple of 3, or it contains 3 in its representation, it should be replaced by the word “fizz”;
2. If it is a multiple of 5, or it contains 5 in its representation, it should be changed to “buzz”;
3. If it is a multiple of 3 and 5 it should be changed to “fizzbuzz”;
4. If both rule 1 or rule 2 and rule 3 are checked at the same time, it should be changed to “lucky”;
5. Rules 1 and 2 are cumulative. Example: 3 should be changed to “fizz fizz”.

Example: Numbers from 1 to 20 will return:

1, 2, “fizz fizz”, 4, “buzz buzz”, “fizz”, 7,8, “fizz”, “buzz”, 11, “fizz”, “fizz”, 14, “lucky”, 16, 17,” fizz “, 19,” buzz ”

## Prerequisite
Install [Node.js](https://nodejs.org/)

Make sure you have npm globally accessible and from a console/terminal, in the project folder run the following command:
```console
npm install
```

## Run application
From a console/terminal, in the project folder, run the following command (where 'number' should be replaced by the number you want to pass):
```console
npm start <number>
```
Example, for number 9:
```console
npm start 9
```

## Run tests
From a console/terminal, in the project folder, run the following command:
```console
npm test
```
