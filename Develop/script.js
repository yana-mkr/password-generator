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
  lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z"];
}

var upperCase = window.confirm("Should your password include upper case letters?");
if (upperCase) {
  upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
"V", "W", "X", "Y", "Z"];
}

var numbers = window.confirm("Should your password include numbers?");
if (numbers) {
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
}

var specialChar = window.confirm ("Should your password include special characters?");
if (specialChar) {
  specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|",
"<", ">", ".", "?", "/", ";", ":"];
}

//console.log({
  //pwLength,
 // lowerCase,
 // upperCase,
 // numbers,
 // specialChar
//})

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
