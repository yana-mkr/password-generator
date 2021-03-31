// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var pwLength = window.prompt("How long should your password be? Enter a number between 8 and 128.");
if (pwLength < 8 || pwLength > 128) {
generatePassword();
  return;
}

var lowerCase = window.confirm("Should your password include lower case letters?");
if (lowerCase) {
  lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
}

var upperCase = window.confirm("Should your password include upper case letters?");
if (upperCase) {
  upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
}

var numbers = window.confirm("Should your password include numbers?");
if (numbers) {
  numbers = ["1234567890"];
}

var specialChar = window.confirm ("Should your password include special characters?");
if (specialChar) {
  specialChar = ["~!@#$%^&*()_-+={}[]|<>.?/;:"];
}

console.log({
pwLength,
 lowerCase,
 upperCase,
 numbers,
 specialChar
})

var emptyArray = [];

if (lowerCase) {
  emptyArray += lowerCase
}

if (upperCase) {
  emptyArray += upperCase
}

if (numbers) {
 emptyArray += numbers
}

if (specialChar) {
  emptyArray += specialChar
}

//console.log(emptyArray);

var newPassword = ""

for(let i = 0; i < pwLength; i += 1) {
  // reference from Stack Overflow
  // var item = items[Math.floor(Math.random() * items.length)];

  newPassword += emptyArray[Math.floor(Math.random() * emptyArray.length)];
}

//console.log(newPassword)
return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
