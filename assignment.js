// let country = "Philippines";
// let continent = "Asia";
// const population = 96000000;

// console.log(country);
// console.log(continent );
// console.log(population);


// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture



// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// Solutions:

// massMark = 78;
// heightMark = 1.69;

// massJohn = 92;
// heightJohn = 1.95;

// BMIMark = massMark / (heightMark ** 2);

// BMIJohn = massJohn / (heightJohn ** 2);

// console.log(`Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}` );

// markHigherBMI = BMIMark > BMIJohn;

// console.log(`Mark's BMI higher than John's BMI is ${markHigherBMI}` );


// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture



// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).


// Solutions:

// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}. `)
// }else if(BMIJohn > BMIMark) {
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}.`)
// }


// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// Solutions:

// const scoreDolphin = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log (`Dolphin's average score is ${scoreDolphin} and Koalas's average score is ${scoreKoalas}`)


// if(scoreDolphin > scoreKoalas && scoreDolphin >= 100 ){
//     console.log(`Dolphins win the trophy`);
// }else if (scoreDolphin < scoreKoalas && scoreKoalas >= 100){
//     console.log(`Koalas win the trophy`)
// }else if (scoreDolphin === scoreKoalas && scoreDolphin >= 100 && scoreKoalas >= 100  ) {
//     console.log(`Both win the trophy`);
// }else {
//     console.log(`No one wins the trophy`)
// }



 // CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



// const calcAverage = (a,b,c) => (a + b + c ) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins , scoreKoalas)

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//       console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`) ;
//     } else if  (avgKoalas >= 2 * avgDolphins)  {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`No team wins.`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// // console.log(checkWinner(46,56));

// //Test @
// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);

// checkWinner(scoreDolphins, scoreKoalas);


const calcAverage = (a,b,c) => (a+b+c) /3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(23,34,27);


const checkWinner = function (avgDolphins , avgKoalas) {
    if ( avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins..`)
    }
};

checkWinner(scoreDolphins , scoreKoalas);


let celcius = 37;
let farenheit = 98.6;


const convertTemp = function (temperature , unit) {
    if ( unit === 'C') {
        return (temperature * 9/5) + 32 ;
    } else if ( unit === 'F') {
        return (temperature - 32) * 5/9;
    } else {
       return `invalid unit`;
    }
}

 

 
const convertToFarenheit = convertTemp(celcius ,'C')
console.log(`${celcius} C is equivalent to ${convertToFarenheit} F. `);

const convertToCelcius = convertTemp(farenheit , 'F' )
console.log(`${farenheit} F is equivalent to ${convertToCelcius} C.`)

