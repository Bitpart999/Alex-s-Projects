const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter,  shift) {                  // Step 1:
 const index = alphabet.indexOf(letter.toLowerCase());
 const newIndex = (index + shiftValue) % alphabet.length;
 return alphabet[newIndex];
}

function encryptMessage(word, shift) {                    //Step 2
  let encryptMessage = "";
  for(let i = 0; i < word.length; i++) {
    encryptMessage += encryptLetter(word[i], shift);
  }
  return encryptMessage;
}
function decryptLetter(letter, shift) {                  //Step 3
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];  
}

function decryptedMessage(word, shift) {
  let decryptedMessage = "";
  for(let i = 0; i < word.length; i++) {
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}

//Question: yes it would return to brutus if the parameters are inputted correctly.
