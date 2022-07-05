const palindromeChecker = (word) => {
  const conditionedWord = word.trim().toLowerCase();
  return /^[a-zA-Z]+$/.test(conditionedWord)
    ? (() => {
        let letters = [];
        let reverseWord = ``;

        for (letter of conditionedWord) letters.push(letter);

        for (letter of conditionedWord) reverseWord += letters.pop();

        return reverseWord === conditionedWord
          ? `${conditionedWord} is a palindrome`
          : `${conditionedWord} is not a palindrome`;
      })()
    : `please make sure your input is a single word`;
};

console.log(palindromeChecker(` raCecar`));
