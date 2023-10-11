function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = "Hello, World!"; // Change this to test with different strings
let reversedString = reverseString(originalString);
console.log(`Original: ${originalString}`);
console.log(`Reversed: ${reversedString}`);
