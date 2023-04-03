// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain? (Must be between 8 and 128)"));
 
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Length must be a number between 8 and 128. Please try again ");
    return null;
  } 

  var hasSpecialCharacters = confirm ("click ok to confirm including special characters.");
  var hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  var hasLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
  var hasUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters.");

  if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowercasedCharacters && !hasUpperCasedCharacters){
    alert("you must select at least one character type.Please try again");
    return null;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
      }
  
  // Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
var passwordOptions = getPasswordOptions();

if(!passwordOptions){
  return "";
}

var password = "";
  var possibleCharacters = [];
  
  if (passwordOptions.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  
  if (passwordOptions.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  
  if (passwordOptions.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  
  if (passwordOptions.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    var randomChar = getRandom(possibleCharacters);
    password += randomChar;
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);