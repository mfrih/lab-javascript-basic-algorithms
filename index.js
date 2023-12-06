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

// 3.2 : backwards (reverse ;-))

const reversedName = hacker1.split("").reverse().join("");
console.log(reversedName);
