/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.

    Output: only the shared values between the two arrays (deduped).

    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let newArray = []
    
    for (let i = 0; i < sortedA.length; i++) {
        if(sortedB.includes(sortedA[i])){
            for(var j=0; j < sortedB.length; j++){
                if(sortedB[j] == sortedA[i] && !newArray.includes(sortedB[j])){
                    newArray.push(sortedB[j])
                }
            }
        }
        
    }return newArray
}
//15% faster

function orderedIntersection2(array1, array2){
    let ordered = [];
    for(var i = 0; i < array1.length; i++){
        if(array2.includes(array1[i]) && !ordered.includes(array1[i])){
            let index = array2.indexOf(array1[i])
            ordered.push(array2[index])
        }
    }
    return ordered;
}


/*****************************************************************************/

console.log(orderedIntersection(numsA1, numsB1));