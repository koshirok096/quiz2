Question 1: What's the output?
function greeting() {
console.log(name);
console.log(age);
var name = "Hana";
let age = 21;
}

greeting();
// D: undefined and ReferenceError

// Ans:
// Short explanation:
// name and age should be on the upper before two console.log lines. If the order of lines changed, it will work. 

Question 2: What's the output?
+true;
!"Lydia";

// A: 1 and false

// Ans:
// Short explanation:
// Boolen with + would be number type. ! makes "Lyndia" negative = false

Question 3: What's the output?
function sum(a, b) {
return a + b;
}

sum(1, "2");

// C: "12"

// Ans:
// Short explanation:
// By merging 1 with "2", value would be strings "12".

Question 4: What's the output?
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// C: 0 2 2

// Ans:
// Short explanation:
// 1. ZERO
// 2. Just incremented
// 3. Same as above

Question 5: What's the output?
!!null;
!!"";
!!1;

// B: false false true

// Ans:
// Short explanation:
// 1. double negative to null = false
// 2. double negative to "" (absent value) = false
// 3. double negative to 1 = true

Question 6: What's the output?
console.log(3 + 4 + "5");

// B: "75"

// Ans:
// Short explanation:
// First, Number calculation excute (3 + 4 = 7). Then merge 7 with Strings "5" and the result is "75"

Question 7: What's the value of num?
const num = parseInt("7*6", 10);

// D: NaN

// Ans:
// Short explanation:
// This is because the argument is Strings


Question 8:
Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.

function indexOfIgnoreCase(s1, s2) {
    let s1Lower = s1.toLowerCase();
    let s2Lower = s2.toLowerCase();
    return s1Lower.indexOf(s2Lower);
  }
  

Question 9:
Write a function firstChar, which returns the first character that is not a space when a string is passed.

function firstChar(text) {
    let trimmedText = text.trim();
    return trimmedText.charAt(0);
}
  
Question 10:
Write a function normalize, that replaces '-' with '/' in a date string.

Example: normalize('20-05-2017') should return '20/05/2017'.

let date = normalize('20-05-2017');
console.log('date: ',date);

function normalize(date){
    return (date.replace(/-/g,'/'));
}
