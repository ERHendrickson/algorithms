/* 
Given two strings, return true if the first string can be built from the letters in the 2nd string
Ignore case .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
    //build an object which holds the letters in the first string with the number of times that letter is used as the value

    //travers through the second string removing the loweing the value of the object as i went for each letter in the second string

    //if the value ever went below 0 return false. if the length of the second string is larger than the first return false. if first string contains letters that aren't in the second string return false
    let s1Obj = {}
    if(s1.length > s2){
        return false
    }
    for(let i = 0; i < s1.length; i++){
        if(!(s1[i] in s1Obj)){
            s1Obj[s1[i]] = 1
        }else{
            s1Obj[s1[i]] ++
        }
    }
    for(letter of s2){
        if(letter in s1Obj)
    }
    console.log(s1Obj)
}

/*****************************************************************************/
canBuildS1FromS2(strA1,strB1)