
//encryption
function encrypt(val) {
  let result = [];
  let upperVal = val.toUpperCase(); 

//go through each letter of inputted value 
  for (let i = 0; i < upperVal.length; i++) {
    let currentLetter = upperVal[i];

//use switch case - ex. if letter is "A", replace w/ "aaaaa"
    switch(currentLetter) {
      case "A": 
        result.push("aaaaa");
        break;
      case "B": 
        result.push("aaaab");
        break;
      case "C": 
        result.push("aaaba");
        break;
      case "D": 
        result.push("aaabb");
        break;
      case "E":
        result.push("aabaa");
        break;
      case "F":
        result.push("aabab");
        break;
      case "G":
        result.push("aabba");
        break;
      case "H":
        result.push("aabbb");
        break;
      case "I":
        result.push("abaaa");
        break;
      case "J":
        result.push("abaab");
        break;
      case "K":
        result.push("ababa");
        break;
      case "L":
        result.push("ababb");
        break;
      case "M":
        result.push("abbaa");
        break;
      case "N":
        result.push("abbab");
        break;
      case "O":
        result.push("abbba");
        break;
      case "P":
        result.push("abbbb");
        break;
      case "Q":
        result.push("baaaa");
        break;
      case "R":
        result.push("baaab");
        break;
      case "S":
        result.push("baaba");
        break;
      case "T":
        result.push("baabb");
        break;
      case "U":
        result.push("babaa");
        break;
      case "V":
        result.push("babab");
        break;
      case "W":
        result.push("babba");
        break;
      case "X":
        result.push("babbb");
        break;
      case "Y":
        result.push("bbaaa");
        break;
      case "Z":
        result.push("bbaab");
        break;
       default:
        result.push(currentLetter);
    }
}

  return result.join('');
}

//decryption
function decrypt(val) {
  let result = [];
    //let upperVal = val.toUpperCase(); 

//go through each letter of inputted value 
  for (let i = 0; i <= val.length; i++) {
    let first5 = val.slice(0, 5);
    val = val.slice(5);

//use switch case - ex. if letter is "A", replace w/ "aaaaa"
    switch(first5) {
      case "aaaaa": 
        result.push("A");
        break;
      case "aaaab": 
        result.push("B");
        break;
      case "aaaba": 
        result.push("C");
        break;
      case "aaabb": 
        result.push("D");
        break;
      case "aabaa":
        result.push("E");
        break;
      case "aabab":
        result.push("F");
        break;
      case "aabba":
        result.push("G");
        break;
      case "aabbb":
        result.push("H");
        break;
      case "abaaa":
        result.push("I");
        break;
      case "abaab":
        result.push("J");
        break;
      case "ababa":
        result.push("K");
        break;
      case "ababb":
        result.push("L");
        break;
      case "abbaa":
        result.push("M");
        break;
      case "abbab":
        result.push("N");
        break;
      case "abbba":
        result.push("O");
        break;
      case "abbbb":
        result.push("P");
        break;
      case "baaaa":
        result.push("Q");
        break;
      case "baaab":
        result.push("R");
        break;
      case "baaba":
        result.push("S");
        break;
      case "baabb":
        result.push("T");
        break;
      case "babaa":
        result.push("U");
        break;
      case "V":
        result.push("babab");
        break;
      case "babba":
        result.push("W");
        break;
      case "babbb":
        result.push("X");
        break;
      case "bbaaa":
        result.push("Y");
        break;
      case "bbaab":
        result.push("Z");
        break;
       default:
        result.push(' ');
    }
    //first5 = first5.slice(5);
}

  return result.join('');

}


function processPhrase() {
  let inputPhrase = document.getElementById('inputPhrase').value; //assign entered phrase to ID 'inputPhrase'
  let encryptedPhrase = encrypt(inputPhrase); //use inputed phrase in function encrypt
  document.getElementById('encrypted').textContent = encryptedPhrase; //assign encrypted phrase to ID 'encrypted'


  // Decrypt the encrypted phrase
  let decryptedPhrase = decrypt(encryptedPhrase);
  document.getElementById('decrypted').textContent = decryptedPhrase; //assign decrypted phrase to ID 'decrypted'

 }



console.log(encrypt("dog"));
