/* 
    String Anagrams
    Given a string,
    return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
    Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str1, anagrams=[], partial="") { //don't be afraid to add parameters!
    // for (let i = 0; i < str1.length; i++) {
    //     partial = str1[i+1] + partial
        
    // }
    // console.log(anagrams)
    // console.log(partial)
    // anagrams.push(partial)
    // return generateAnagrams(partial)
    if(!str1) anagrams.push(partial)

    for (let i = 0; i < str1.length; i++) {
        const currentLetter = str1[i]
        const restOfString = str1.slice(0,i) + str1.slice(i+1)
        const rewPartial = partial + currentLetter
        generateAnagrams(restOfString, anagrams, rewPartial)
        
    }
    return anagrams
}

console.log(generateAnagrams(str1)) //["ilm", "iml", "lim", "lmi", "mil", "mli"] (order may vary, that's okay)