// Assignment code here


var upperCase;
var lowerCase; 
var numberCharacters;
var specialCharacters;
var passwordLength;

var choices=0;

var upperArr = ["A","B","C","D","E","F","G","H","I","J"];
var lowerArr = ["a","b","c","d","e","f","g","h","i","j"];
var numberArr =[0,1,2,3,4,5,6,7,8,9];
var specialArr = ["!","@","#","$","%","&","?","<",">","+"];

// Get references to the #generate (button) element 
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  alert("Please select whether you would like to include: UPPERCASE, LOWERCASE, NUMBERS and SPECIAL CHARACTERS"); 
  upperCase = confirm("Would you like to include UPPERCASE characters in your password?");
  if (upperCase) {
    alert("You chose to include UPPERCASE");
    choices++;
    
    
  } else { alert("You chose not to include UPPERCASE");}
  

   lowerCase = confirm("Would you like to include LOWERCASE characters in your password?");
   if (lowerCase){
    alert("You chose to include LOWERCASE");
    choices++;
    
  } else { alert("You chose not to include LOWERCASE");}
  
   numberCharacters = confirm("Would you like to include NUMBERS characters in your password?");
   if (numberCharacters){
    alert("You chose to include NUMBERS");
    choices++;
    
  } else { alert("You chose not to include NUMBERS");}
  
   specialCharacters = confirm("Would you like to include SPECIAL CHARACTERS in your password?");
   if (specialCharacters){
    alert("You chose to include SPECIAL CHARACTERS");
    choices++; 
   
  } 
  else { alert("You chose not to include SPECIAL CHARACTERS");}

   var length = function() {
      passwordLength = parseInt(prompt("Choose your desired password length between 8 and 128"));
      console.log("passoword length", passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose choose a number between 8 and 128");
      length();
    }
    return passwordLength;
  };
  length();
  
  var newPasswordLength = length();
  
  writePassword();
 
  console.log("password length", passwordLength);
},false);





// Write password to the #password input  ( a text area inside a div, appendChild?)

var passwordArray = [];
var writePassword = function() {

  // divide the chosen password length by the number of selected password options. 
  var numInEachCategory =  Math.ceil(passwordLength/choices);
  
//  for (var x = 0; x < passwordLength; x++)  {

        // check to see if each element is true.  if true, randomly select numInEachCategory from array. push to passwordArray
   
        if (upperCase){
          for (var i = 0; i <numInEachCategory; i++) {
            var passwordElement= upperArr[Math.floor(Math.random () * upperArr.length)]; 
            passwordArray.push(passwordElement);
          } 
          
        }
        if (lowerCase) {
          for (var i = 0; i < numInEachCategory; i++) {
            var passwordElement= lowerArr[Math.floor(Math.random () * lowerArr.length)];
            passwordArray.push(passwordElement); 
          } 

        }
        if (numberCharacters){
          for (var i = 0; i < numInEachCategory; i++) {
            var passwordElement= numberArr[Math.floor(Math.random () * numberArr.length)];
            passwordArray.push(passwordElement); 
          } 

        }
         if (specialCharacters) {
          for (var i = 0; i < numInEachCategory; i++) {
            var passwordElement= specialArr[Math.floor(Math.random () * specialArr.length)]; 
            passwordArray.push(passwordElement);
          } 
        }
      return passwordArray;
  //}
};

var password = writePassword();



// console.log("long",password);
// // set the length of the password to passwordLength
// console.log(passwordLength);
//  //password.length = passwordLength;
//  console.log("short",password);
 

//   
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
