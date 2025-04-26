const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    const index = alphabet.indexOf(letter.toLowerCase());

    if (index === -1) {
      // If the character is not in the alphabet, add it as is
      encryptedMessage += letter;
    } else {
      // Encrypt the letter
      const newIndex = (index + shiftValue) % alphabet.length;
      const encryptedLetter = alphabet[newIndex];
      encryptedMessage += encryptedLetter; // Add the encrypted letter
    }
  }
  return encryptedMessage; // Return the full encrypted message
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";
  for (let i = 0; i < encryptedMessage.length; i++) {
    const letter = encryptedMessage[i];
    const index = alphabet.indexOf(letter.toLowerCase());

    if (index === -1) {
      // If the character is not in the alphabet, add it as is
      decryptedMessage += letter;
    } else {
      // Decrypt the letter
      const newIndex = (index - shiftValue + alphabet.length) % alphabet.length;
      const decryptedLetter = alphabet[newIndex];
      decryptedMessage += decryptedLetter; // Add the decrypted letter
    }
  }
  return decryptedMessage; // Return the full decrypted message
}