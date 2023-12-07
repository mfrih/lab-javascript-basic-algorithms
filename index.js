// Iteration 1: Names and Input

const hacker1 = "María";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Frih";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 : Uppercase separated by space

const upperCasedHacker1 = hacker1.toUpperCase();

// reminder .split() turns the string into an array, each index of the array is a letter.
// join() is defined by MDN as
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
// separated by commas or a specified separator string.

const separatedHacker1Name = upperCasedHacker1.split("").join(" ");
console.log(separatedHacker1Name);

// // 3.1 doing it the loop way (+ a condition)

// let spacedUpperName = "";

// for (let i = 0; i < hacker1.length; i++) {
//   const letter = hacker1[i].toUpperCase();

//   if (i < hacker1.length - 1) {
//     spacedUpperName += letter + " ";
//   } else {
//     spacedUpperName += letter;
//   }
// }

// // 3.1 doing it the loop way (+ trim)

// let spacedUpperName = "";

// for (let i = 0; i < hacker1.length; i++) {
//   const letter = hacker1[i].toUpperCase();
//   spacedUpperName += letter + " ";
// }

// spacedUpperName = spacedUpperName.trim();
// console.log(spacedUpperName);

// 3.2 : backwards (reverse ;-))

let reversedName = hacker1.split("").reverse().join("");
console.log(reversedName);

// 3.2 doing it the loop way

// let reversedName = "";
// for (let i = hacker1.length - 1; i >= 0; i--) {
//     const letter = hacker1[i];
//     reversedName += letter;
// }

// console.log(reversedName);

//3.3 : lexicographic order

const hacker1LowerCase = hacker1.toLowerCase();
const hacker2LowerCase = hacker2.toLowerCase();
console.log(hacker1LowerCase);
console.log(hacker2LowerCase);

if (hacker1LowerCase < hacker2LowerCase) {
  console.log(`${hacker1} goes first`);
} else if (hacker1LowerCase > hacker2LowerCase) {
  console.log(`Yo, ${hacker2} goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// 3.3 Other way of comparing strings

// console.log(hacker1.localeCompare(hacker2, undefined, { sensitivity: "base" }));

// 3.3 doing it the loopy way

// 3.3.1 first we're going to look for the shortest name to loop around
// let's try and do this condition using a ternary operator : let shortestName = condition ? true : false

let shortestName = hacker1.length > hacker2.length ? hacker2 : hacker1;
let sameName = true;

// 3.3.2 then we run the loop

// for (let i = 0; i < shortestName.length; i++) {
//   if (hacker1[i].toLowerCase() < hacker2[i].toLocaleLowerCase()) {
//     console.log(`${hacker1} goes first`);
//     sameName = false;
//     break;
//   }
//   if (hacker2[i].toLowerCase() < hacker1[i].toLocaleLowerCase()) {
//     console.log(`${hacker2} goes first`);
//     sameName = false;
//     break;
//   }
// }

// if (sameName) {
//   console.log("They have the same name");
// }
