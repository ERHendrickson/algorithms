/* 
* Given by Riot games.
* Rehashes an incorrectly hashed string by combining letter count occurrences
* and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    
    let obj = {}
    let tempNum = '';
    let newArrayLetters = []
    let newArrayNumbers = []
    //separate the string before each letter
    for(ele of s){
        // console.log(ele);
        if(isNaN(ele)){
            newArrayLetters.push(ele)
            console.log(newArrayLetters)
            newArrayNumbers.push(tempNum)
            console.log(newArrayNumbers)
            tempNum = '';
        }else{
            // newArrayNumbers.push(ele)
            tempNum += ele
            console.log(tempNum)
        }
    }
        //if the value at i is a letter place it in a object with the value of the number after it
        

}


/*****************************************************************************/
rehash(str1)