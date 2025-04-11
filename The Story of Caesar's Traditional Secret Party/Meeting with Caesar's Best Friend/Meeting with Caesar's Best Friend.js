const friend = "BRUTUS"
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz"; //step 1

const firstLetter = friend[0]; //step 2
const index = alphabet.indexOf(firstLetter.toLowerCase()); // step 2 

//Question 1 : the result of the index is 1 instead of 2 because an index starts with 0

const alphabetLength = alphabet.length; //step 4
const newIndex = (index + shiftValue) % alphabetLength; // step 3 and 5
const encryptedFirstLetter = alphabet[newIndex]; //  step 3

// Question 2: you would use the operator % to loop back to a from z

const encryptedMessage = "EUXWXV"; //step 6
const teaser = encryptedMessage.slice(0 , 3); // step 6