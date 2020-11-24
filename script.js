var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var length = prompt("How many characters should your new password have?");

    if (length >= 8 && length <= 128) {
      alert("Thank you!");

      const passLower = "abcdefghijklmnopqrstuvwxyz";
      const passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const passNumeric = "0123456789";
      const passSpecial = '!@#$%^&*.=-_"';

      let password = " ";
      let validChars = " ";

      var hasPassLower = confirm("Do you want lowercase characters?");
      var hasPassUpper = confirm("Do you want upper case characters?");
      var hasPassNumeric = confirm("Do you want numbers?");
      var hasPassSpecial = confirm("Do you want special characters?");

      if (hasPassLower) {
        validChars += passLower;
      }

      if (hasPassUpper) {
        validChars += passUpper;
      }

      if (hasPassNumeric) {
        validChars += passNumeric;
      }

      if (hasPassSpecial) {
        validChars += passSpecial;
      }

      for (let i = 0; i < length; i++) {
        password += validChars.charAt(
          Math.floor(Math.random() * validChars.length)
        );
      }

      return password;
    } else {
      alert("That's not a valid response. Please try again.");
    }
  }
}

generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Math.floor(Math.random() * validChars.length);
// password += validChars[index];
//     }

// for (i = 0, n = combinedArray.length; i < length; ++i) {
//   password += combinedArray.charAt(Math.floor(Math.random() * n));
// }

// for (i = 0; n = charset.length; i < length; ++i) {

//   password += charset.charAt(Math.floor(Math.random() * n));

// if (hasPassLower) {
//   combinedArray.concat(passLower);
// }
// if (hasPassUpper) {
//   combinedArray.concat(passUpper);
// }
// if (hasPassNumeric) {
//   combinedArray.concat(passNumeric);
// }
// if (hasPassSpecial) {
//   combinedArray.concat(passSpecial);

// } else if (passLower) {
//   charset += "abcdefghijklmnopqrstuvwxyz";
// } else if (passUpper) {
//   charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// } else if (passNumeric) {
//   charset += "0123456789";
// } else if (passSpecial) {
//   charset += "!@#$%^&*.=-_";
// }

// Write password to the #password input

// Add event listener to generate button

// function getpassLower() {
//   return String.fromCharSet(Math.floor(Math.random() * 27) + 69);
// }

// function getpassUpper() {
//   return String.fromCharSet(Math.floor(Math.random() * 27) + 69);
// }
// function getpassNumeric() {
//   return String.fromCharSet(Math.floor(Math.random() * 27) + 69);
// }
// function getpassSpecial() {
//   return String.fromCharSet(Math.floor(Math.random() * 27) + 69);
