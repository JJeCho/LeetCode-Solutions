/**
 * Leetcode Problem 3: Longest Substring Without Repeating Characters
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(min(n,m))
 *
 * @param {string} s - Input string.
 * @return {number} Length of the longest substring without repeating characters.
 */
var lengthOfLongestSubstring = function(s) {
    // Map to keep track of the last occurrence of characters.
    let chars = new Map();
    
    // Variable to keep track of the maximum length of substring.
    let max = 0;
    
    // Variable to keep track of the starting index of the substring.
    let left = 0;
    
    // Loop through the string.
    for(let i = 0; i < s.length; i++) {
        // If the character is already present in the substring.
        if(chars.has(s[i])) {
            // Update the starting index if we can include more characters.
            left = Math.max(left, chars.get(s[i]) + 1);
        }
        
        // Update the map with the current character and its index.
        chars.set(s[i], i);
        
        // Update the maximum length if we have included more characters.
        max = Math.max(max, i - left + 1);
    }
    
    // Return the maximum length of the substring.
    return max;
};
