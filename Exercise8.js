/*
Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid if the part can be a palindrome after removing, at most, one character.

A palindrome is a word or phrase that reads the same from left to right as it does from right to left.

Our function should return a boolean that indicates whether the spare part is valid or not with that rule:

checkPart("uwu") // true
"uwu" is a palindrome without removing any character

checkPart("miidim") // true
"miidim" can be a palindrome after removing the first "i"

checkPart("midu") // false
"midu" cannot be a palindrome after removing a character
*/

checkPart("uwu"); // true
// "uwu" is a palindrome without removing any character

checkPart("miidim"); // true
// "miidim" can be a palindrome after removing the first "i"

checkPart("midu"); // false
// "midu" cannot be a palindrome after removing a character

function checkPart(part) {
  const isPalindrome = (word) => word === [...word].reverse().join("");
  return [...part].some((_letter, i) =>
    isPalindrome(part.substring(0, i - 1) + part.substring(i))
  );
}

/*
ANOTHER SOLUTION

function checkPart(part) {
    const res = [...part, ''].some((_, i, arr) => {
        const subArr = arr.slice(0, i).concat(arr.slice(i + 1))
        
        return subArr.join('') === subArr.reverse().join('')
    })
    return res
}
*/
