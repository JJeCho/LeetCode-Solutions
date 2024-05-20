/** 
 * Leetcode Problem 9: Palindrome Number
 * 
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 *
 * @param {number} x - The integer to check.
 * @return {boolean} - True if the integer is a palindrome, false otherwise.
 */
var isPalindrome = function(x) {
    // If the number is negative or has a trailing zero, it cannot be a palindrome.
    if (x < 0 || (x % 10 === 0 && x !== 0)) { 
        return false; 
    }
    
    // Initialize a variable to store the reversed number.
    let rev = 0;
    
    // Reverse the number by repeatedly dividing it by 10 and appending the remainder.
    while (x > rev) {
        // Get the last digit of the number.
        let dig = x % 10;
        
        // Divide the number by 10 to remove the last digit.
        x = Math.floor(x / 10);
        
        // Append the last digit to the reversed number.
        rev = rev * 10 + dig;
    }
    
    // If the original number is equal to its reversed form, or if the reversed
    // form is just one digit off from the original number (i.e. a palindrome), 
    // return true. Otherwise, return false.
    return x === rev || x === Math.floor(rev / 10);
};


// Another solution
// Time Complexity: O(n)
// Space Complexity: O(n)

var isPalindrome = function(x) {
    // Convert the integer to a string, 
    // reverse the string, 
    // and compare it to the original string.
    
    // If the reversed string is equal to the original string, 
    // the integer is a palindrome.
    
    // The parseFloat function is used to convert the reversed string back to a number.
    
    // The return statement converts the result to a boolean.
    
    return x === parseFloat(x.toString().split('').reverse().join(''));
};
