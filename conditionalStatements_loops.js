// 🌡️ Temperature Check (if-else)
let temperature = 22;

if (temperature < 0) {
  console.log("It's Freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's Cold");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's Mild");
} else {
  console.log("It's Warm");
}

// 🌡️ Temperature Check (switch)
let temp = 22;

switch (true) {
  case (temp < 0):
    console.log("It's freezing!");
    break;
  case (temp >= 0 && temp <= 15):
    console.log("It's cold.");
    break;
  case (temp >= 16 && temp <= 25):
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}

// ➗ Divisibility Check (if-else)
let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// ➗ Divisibility Check (switch)
let num = 9;

switch (true) {
  case (num % 2 === 0 && num % 3 === 0):
    console.log("Divisible by both.");
    break;
  case (num % 2 === 0):
    console.log("Divisible by 2.");
    break;
  case (num % 3 === 0):
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

// 🔁 For Loops

// 1. Print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Sum from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum is:", sum);

// 4. Print array elements
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 5. Largest number in array
const nums = [3, 7, 2, 5, 10, 6];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log("The biggest number is:", max);

// 🔁 While Loops

// 1. Print 1 to 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Even numbers from 1 to 20
let num2 = 1;
while (num2 <= 20) {
  if (num2 % 2 === 0) {
    console.log(num2);
  }
  num2++;
}

// 3. Sum from 1 to 100
let total = 0;
let count = 1;
while (count <= 100) {
  total += count;
  count++;
}
console.log("Total sum:", total);

// 4. Multiples of 5 less than 50
let n = 1;
while (n < 50) {
  if (n % 5 === 0) {
    console.log(n);
  }
  n++;
}

// 🔁 Do While Loops

// 1. Print 1 to 10
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);

// 2. Sum from 1 to 100
let sum2 = 0;
let j = 1;
do {
  sum2 += j;
  j++;
} while (j <= 100);
console.log("Sum is:", sum2);

// 3. Ask user for number > 10 (browser only)
let numberInput;
do {
  numberInput = prompt("Enter a number greater than 10:");
} while (numberInput <= 10);