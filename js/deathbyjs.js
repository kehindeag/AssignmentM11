//STEP 1
function myWord(word) {
  // an array of characters
  let wordArray = word.split("");

  // Sort the array
  wordArray.sort();

  // Join the sorted characters back into a string
  let sortedWord = wordArray.join("");

  // Return the sorted string
  return sortedWord;
}

// Example usage
let word = "webmaster";

console.log(myWord(word));
//STEP 2
function myText(word) {
  // an array of characters
  let wordArray = word.split(" ");

  let capitalizedWord;

  let newword;

  for (let i = 0; i < wordArray.length; i++) {
    newword = wordArray[i];
    capitalizedWord = newword.charAt(0).toUpperCase() + newword.slice(1);

    wordArray[i] = capitalizedWord;
  }
  let capitalizedString = wordArray.join(" ");
  return capitalizedString;
}

// Example usage
let text = "the quick brown fox";

console.log(myText(text));
//STEP 3

//STEP 4

//STEP 5
