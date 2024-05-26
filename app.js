const data =[[], [], [], []];
const num= [[0, 1, 2,3], [ 1, 0, 1,2], [2, 1, 0,1]];

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let number = parseInt(prompt("Enter the number for the multiplication table:"));
let length = parseInt(prompt("Enter the length of the multiplication table:"));
console.log(`Multiplication Table of ${number} (Up to ${length} terms):`);
for (let i = 1; i <= length; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Printing items of the array using a for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === item) {
            return true; 
        }
    }
    return false; 
}

let userInput = prompt("Enter an item to search:");

let isFound = searchItem(userInput);
if (isFound) {
    alert("Yes, the item is found in the list.");
} else {
    alert("No, the item is not found in the list.");
}
let B = [24, 53, 78, 91, 12];
let largestNumber = B[0];
for (let i = 1; i < B.length; i++) {
    if (B[i] > largestNumber) {
        largestNumber = B[i];
    }
}
console.log("The largest number in the array is:", largestNumber);

const C= [24, 53, 78, 91, 12];
let smallestNumber = C[0];
for (let i = 1; i < C.length; i++) {
    if (C[i] < smallestNumber) {
        smallestNumber = C[i];
    }
}
console.log("The smallest number in the array is:", +smallestNumber);


for (let i = 1; i <= 100; i++) {
   if (i % 5 === 0) {
        console.log(i);
    }
}
