// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
    //create a temp string to compare values with whole string
    // let newArray = []
    // for (let i = 0; i < str.length; i++) {
    //     //if the value in the string at the index of i is not inside the array add it
    //     if(!(newArray.includes(str[i]))){
    //         newArray.push(str[i])
    //     }
        
    // }return newArray.length
    //1. first loop add the value to the end of the new string.
    //2. second loop compare the string to the given string if there are duplicates hold the value in a temp string and move on to the next iteration of the loop
    // let tempStr = ''
    // let newStr = ''

    // for (let i = 0; i < str.length; i++) {
    //     newStr += str[i]
        
        
    // }
    function lengthOfLongestSubString(str) {
        let strTrack = {};
        let maxString = 0;
        let tempMax = 0;
    
        for( let i = 0; i<str.length; i++){
            let j = i;
            while( !( str[j] in strTrack) && j<str.length){
                strTrack[str[j]] = 1;
                tempMax++;
                j++;
            }
            if( tempMax > maxString){
                maxString = tempMax
            }
            tempMax = 0;
            strTrack = {};
        }
        return maxString;
    }
}
        




/*****************************************************************************/

console.log(lengthOfLongestSubString(str1))
console.log(lengthOfLongestSubString(str2))
console.log(lengthOfLongestSubString(str3))
console.log(lengthOfLongestSubString(str4))