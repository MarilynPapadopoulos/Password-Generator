// Assignment code here


var upperCase;
var lowerCase; 
var numberCharacters;
var specialCharacters;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
   upperCase = confirm("Would you like to include UPPER CASE characters in your password?"); 
   lowerCase = confirm("Would you like to include LOWER CASE characters in your password?");
   numberCharacters = confirm("Would you like to include NUMBERS characters in your password?");
   specialCharacters = confirm("Would you like to include SPECIAL characters in your password?");

},false);

console.log(upperCase);



// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
