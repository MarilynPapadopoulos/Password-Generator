// Assignment code here


var upperCase;
var lowerCase; 
var numberCharacters;
var specialCharacters;
var passwordLength;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  alert("Please select whether you would like to include: UPPERCASE, LOWERCASE, NUMBERS and SPECIAL CHARACTERS"); 
  upperCase = confirm("Would you like to include UPPERCASE characters in your password?");
  if (upperCase === "true") {
    alert("You chose to include UPPERCASE");
  } esle { alert("You chose not to include UPPERCASE");}

   lowerCase = confirm("Would you like to include LOWERCASE characters in your password?");
   if (lowerCase ==="true"){
    alert("You chose to include LOWERCASE");
  } esle { alert("You chose not to include LOWERCASE");}

   numberCharacters = confirm("Would you like to include NUMBERS characters in your password?");
   if (numberCharacters === "true"){
    alert("You chose to include NUMBERS");
  } esle { alert("You chose not to include NUMBERS");}

   specialCharacters = confirm("Would you like to include SPECIAL characters in your password?");
   if (specialCharacters == "true"){
    alert("You chose to include SPECIAL CHARACTERS");
  } esle { alert("You chose not to include SPECIAL CHARACTERS");}

   passwordLength = prompt("Choose your desired password length between 8 and 128");
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
