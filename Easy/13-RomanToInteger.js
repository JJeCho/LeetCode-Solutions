/**
 * Leetcode Problem 13: Roman to Integer
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s - The Roman numeral string to convert.
 * @return {number} The integer value of the Roman numeral.
 */
var romanToInt = function(s) {
    // Map of Roman numerals to their corresponding integer values
    let map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000},

    // Variable to store the total value of the Roman numeral
    total = 0,

    // Variable to store the value of the previous numeral
    prev = 0;

    // Iterate over the string in reverse order
    for(let i = s.length - 1; i >= 0; i--) {
        // Get the value of the current numeral
        let curr = map[s[i]];

        // Add the previous numeral's value to the total,
        // but subtract it if the previous numeral is smaller
        total += (prev < curr) ? -prev : prev;

        // Update the value of the previous numeral
        prev = curr;
    }

    // Add the value of the last numeral to the total
    return total + prev;
};

// Another solution
// Time Complexity: O(n)
// Space Complexity: O(1)

var romanToInt = function(s) {
    // Map of Roman numerals to their corresponding integer values
    let values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // Variable to store the total value of the Roman numeral
    let total = 0;

    // Loop through the string, one character at a time
    for(let i = 0; i < s.length; i++) {
        // Get the value of the current numeral
        let curr = values[s[i]];

        // Get the value of the next numeral (if it exists)
        let next = values[s[i+1]];

        // If the current numeral's value is less than the next numeral's value,
        // subtract the current numeral's value from the total, and increment i
        // to skip the next numeral. Otherwise, add the current numeral's value
        // to the total.
        if(curr < next) {
            total += next-curr;
            i++;
        }
        else {
            total += curr;
        }
    }

    // Return the total value of the Roman numeral
    return total;
};
