


// let javascriptIsFun = true;



// console.log(typeof true);
// console.log(typeof 31);



// javascriptIsFun = "Yes!";

// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let daniel;
// console.log(daniel);
// console.log(typeof daniel);

// console.log(typeof null);

// Math Operators
// const now = 2037;
// const ageDan = now - 1992;
// const ageGelie = now - 1996;
// console.log(ageDan, ageGelie);

// console.log(ageDan * 2, ageDan / 10, 2 ** 3)
// // 2 ** 3means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Daniel';
// const lastName = 'Dael';

// console.log(firstName + ' ' + lastName);
// // Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 10; // x = x * 10 = 100
// x++; // x = x + 1;
// console.log(x);

// // Comparison operators
// console.log(ageDan > ageGelie); // >, <, >=, <=
// console.log(ageGelie >= 50);

// const isFullAge = ageGelie >= 50;

// console.log(now - 1992 > now -1996);


// const now = 2037;
// const ageDan = now - 1992;
// const ageGelie = now - 1996;

// console.log(now - 1992 > now -1996);

// let x, y;
// x = y = 25-10-5; // x = y = 10, x = 10
// console.log(x, y);


// const firstName = 'Daniel';
// const job = 'Web Developer';
// const birthYear = 1992;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

// console.log(jonas);

// const danielNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(danielNew);

// console.log(`Just a regular string`);

// console.log(`String
// multiple
// lines`)

//   

//Start Coding Exercise 2: CHALLENGE #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI is higher than John's!`)
//     }else {
//      console.log(`John's BMI is higher than Marks's `)   
//     }

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn} !`)
//     }else {
//      console.log(`John's BMI ${BMIJohn} is higher than Marks's BMI ${BMIMark} !`)   
//     }


// type conversion
    // const inputYear = '1991';
    // console.log(Number(inputYear), inputYear);
    // console.log(Number(inputYear) + 18);

    // console.log(Number('Dan'));
    // console.log(typeof NaN)

    // console.log(String(23), 23);

// type coercion 
// console.log ('I am ' + 23 + ' yearsold');
// console.log('23' -'10' -3);
// console.log('23' / '2')

// let n= '1' + 1; //'11'
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Dan'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all");
// }else {
//     console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//     console.log ('YAY! Height is defined');
// }else {
//     console.log('Height is UNDEFINDED');
// }

// const age = `18`;

// if(age === 18) console.log (`You just became an adult :D (strict)`); //this is better
    
// if(age == 18) console.log (`You just became an adult :D (loose)`);

// const favourite =Number(prompt(`What's your favorite number?`)) 

// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23) { // 23 === 23
//     console.log(`Cool ! 23 is an amazing number!`)
// }else if(favourite === 7) {
//     console.log(`7 is also an amazing number`)
// }else if(favourite === 9) {
//     console.log(`9 is also an amazing number`)
// }else {
//     console.log(`number is not 23, 7 or 9`)
// }

// if (favourite !== 23) console.log(`why not 23?`)

//  const hasDriversLicense = true; // A
//  const hasGoodVision = false; // B
 
//  console.log(hasDriversLicense && hasGoodVision);
//  console.log(hasDriversLicense || hasGoodVision);
//  console.log(!hasDriversLicense);

//  if(hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive`)
//  } else {
//     console.log(`Someone else has to has to drive`)
//  }

// const isTired = true; // C


//  if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive`)
//  } else {
//     console.log(`Someone else has to has to drive`)
//  }



// const scoreDolphins = (13 + 108 + 89) / 3;
// const scoreKoalas = (83 + 115 + 99) / 3;

// console.log(scoreDolphins,scoreKoalas);

// if( scoreDolphins > scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100 ) {
//     console.log(`Dolphins win the trophy`)
// } else if (scoreKoalas > scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100 ) {
//     console.log(`Koalas win the trophy`)
// } else if ( scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//      console.log(`Both win the trophy 🥳`) 
// } else {
//     console.log(`No team wins the trophy🙄`) 
// }

// const day = `wednesday`;

// switch (day) {
//     case `monday`:
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case`tuesday`:
//         console.log(`Prepare thery videos`);
//         break;
//     case`wednesday`:
//     case`thursday`:
//         console.log(`Write code examples`);
//         break;
//     case`friday`:
//         console.log(`Record videos`);
//         break;
//     case`saturday`:
//     case`sunday`:
//         console.log(`Enjoy weekends!`);
//         break;
//     default:
//         console.log(`Not a valid day!`);   
// }



// if(day === `monday`) {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === `tuesday`) {
//     console.log(`Prepare theory videos`);
// } else if (day === `wednesday` || day === `thurday`) {
//     console.log(`Write code examples`);
// } else if (day === `friday`) {
//     console.log(`Record videos`);
// } else if (day === `saturday` || day === `sunday`) {
//     console.log(`Enjoy weekends!`);
// } else {
//     console.log(`Not a valid day!`);  
// }  


//Ternary Operator

// const age = 23;

// age >= 18 ? console.log(`I like to drink wine`) :
// console.log(`I like to drink water`);

// const drink = age >= 18 ? `Wine` : `Water`;
// console.log(drink)

// let drink2;

// if(age >= 18) {
//     drink2 = `Wine`;
// }else {
//    drink2 = `Water`;
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? `Wine🍷` : `Water💧`}`)

// const bill = 40;

// let tip;

// if(bill >= 50 && bill <= 300){
//   tip = bill * 0.15;
// } else {
//      tip = bill * 0.20;
// };



// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// const bill = 275;

//Conditional Operator

// const tip = bill >= 50 && bill <= 300 ? bill * 0.20 : bill * 0.15;
//  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)


// My Solution:

// const calcTip = function (bills) {
//     if (bills >= 50 && bills <= 300 ) {
//     return  bills * .20;
//     }   else {
//     return  bills * .15;
//     }
//    }
   
//    const bills = [125, 555, 44];
   
// //    const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
//    const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
   
//    const totals = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];

//    console.log(bills);
//    console.log(tips);
//    console.log(totals);



// Jonas Solution:

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }


// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]


// console.log(totals);


// Objects

// Object literal syntax
// const daniel = {
//     firstName: 'Daniel',
//     lastName: 'Dael',
//     age: 2037 - 1992,
//     job: 'Web Developer',
//     friends: ['Gelie','Rupert', 'Yendell', 'John Lloyd']
// };

// console.log(daniel);

// Dot notation - use to retrieve data from objects
// console.log(daniel.lastName);

// Bracket notation - another way of retrieving data from objects.We can put expression in this notation.
// console.log(daniel['lastName']);

// const nameKey ='Name';
// console.log(daniel['first' + nameKey]);
// console.log(daniel['last'+ nameKey]);

// const interestedIn = prompt('What do you want to know about Daniel? Choose between firstName, lastName, age, job, and friends');
// console.log(daniel[interestedIn]);



// if (daniel[interestedIn]) {
//     console.log(daniel[interestedIn]);    
// } else {
//     console.log('Wrong request, Choose between firstName, lastName, age, job, and friends ')
// };

// daniel.location = 'Philippines';
// daniel['facebook'] = 'Daniel Josue Dael';
// console.log(daniel);


// Challenge
// daniel has 4 friends and his bestfriend is Gelie.

// console.log(`${daniel.firstName} has ${daniel.friends.length} friends and his bestfriend is ${daniel.friends[0]}.`)


// const daniel = {
//     firstName: 'Daniel',
//     lastName: 'Dael',
//     age: 2037 - 1992,
//     job: 'Web Developer',
//     friends: ['Gelie','Rupert', 'Yendell'],
//     hasDriversLicense: true,
//     calcAge: function(birthYear) {    // Any function that is attached to Object is called method.
//         return 2037 - birthYear
//     }
// };

for( let rep = 1; rep <= 10; rep++) {
    console.log(`Rep is ${rep}`);
}


const daniel = [
    'Daniel',
    'Dael',
    2037 - 1992,
    'Web Developer',
    ['Gelie', 'Yendell', 'Rupert'],
    true
];

const types =[];

for(let i = 0; i < daniel.length ; i++) {

    // Reading from daniel array
    console.log(daniel[i], typeof daniel[i]);
 

    // Filling types array
    // types[i] = typeof daniel[i];
    types.push(typeof daniel[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2027 - years[i]);
}


console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for(let i = 0; i < daniel.length ; i++) {
    if(typeof daniel[i] !== 'string') continue;

    console.log(daniel[i], typeof daniel[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < daniel.length ; i++) {
    if(typeof daniel[i] === 'number') break;

    console.log(daniel[i], typeof daniel[i]);
}



