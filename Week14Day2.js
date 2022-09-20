/* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    
    # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "";
const T2 = "";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
    //traverse each string. when a hash i found delete it and the character preceeding the hash.
    let newArray1 = []
    for (let i = 0; i < S.length; i++) {
        newArray1.push(S[i])
        // console.log(newString)
        if(S[i] == '#'){
            newArray1.pop(i)
            newArray1.pop(i-1)
        }
    }
    let newArray2 = []
    for (let i = 0; i < T.length; i++) {
        newArray2.push(T[i])
        // console.log(newString)
        if(T[i] == '#'){
            newArray2.pop(i)
            newArray2.pop(i-1)
        }
    }
    for(i in newArray1){
        if(newArray1[i] != newArray2[i]){
            return false
        }else{
            return true
        }
    }
}

/*****************************************************************************/
console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))
