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
    
    console.log(choices);
  } else { alert("You chose not to include UPPERCASE");}

   lowerCase = confirm("Would you like to include LOWERCASE characters in your password?");
   if (lowerCase){
    alert("You chose to include LOWERCASE");
    
    console.log(choices);
  } else { alert("You chose not to include LOWERCASE");}

   numberCharacters = confirm("Would you like to include NUMBERS characters in your password?");
   if (numberCharacters){
    alert("You chose to include NUMBERS");
    
    console.log(choices);
  } else { alert("You chose not to include NUMBERS");}

   specialCharacters = confirm("Would you like to include SPECIAL CHARACTERS in your password?");
   if (specialCharacters){
    alert("You chose to include SPECIAL CHARACTERS");
     
    console.log(choices);
  } 
  else { alert("You chose not to include SPECIAL CHARACTERS");}

   var length = function() {
     passwordLength = prompt("Choose your desired password length between 8 and 128");
     passwordLength = parseInt(passwordLength);
     console.log(passwordLenght);

     if (passwordLength < 8 && paswordLength > 128) {
      alert("Please choose choose a number between 8 and 128");
      }
    };
    length();
   
},false);





// Write password to the #password input
//function writePassword() {

// set the lenght of the passwordArray to passwordLength


//   for (var i = 0; i >=  passwordLength, i++)  {
//     if (upperCase){
//       add upperArr[i] to the password;
//       password.push 
//   }
  
// }
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
