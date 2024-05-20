/**
 * Leetcode Problem 14: Longest Common Prefix
 *
 * @param {string[]} strs - The array of strings to search.
 * @return {string} The longest common prefix of the strings.
 * 
 * Time Complexity: O(n*m)
 * Space Complexity: O(1)
 */
var longestCommonPrefix = function(strs) {
    // If the array is empty, return an empty string.
    if (strs.length === 0) return '';
    
    // Initialize the prefix with the first string.
    let prefix = strs[0];
    
    // Iterate over each string in the array,
    // excluding the first string.
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the prefix,
        // shorten the prefix by one character.
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix becomes empty, return an empty string.
            if (prefix === '') return '';
        }
    }
    
    // Return the longest common prefix.
    return prefix;
};


// Another solution
// Time Complexity: O(n*m*log n)
// Space Complexity: O(1)
var longestCommonPrefix = function(strs) {
    // Sort the input strings in alphabetical order.
    strs.sort()
    
    // Iterate over each character in the first string.
    for (let i = 0; i < strs[0].length; i++) {
        // If the current character at the same position in any other string is different,
        // the common prefix is the substring of the first string up to but not including the current character.
        if (strs[0][i] !== strs[strs.length - 1][i]){
            return strs[0].substr(0, i);
        } 
    }
    
    // If none of the characters in any pair of strings differed, the common prefix is the first string itself.
    return strs[0]; 
};
