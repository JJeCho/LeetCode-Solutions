/**
 * Leetcode Problem 1: Two Sum
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) 
 * 
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target value.
 * @return {number[]} An array of the indices of the numbers in the array
 * that add up to the target value.
 */
var twoSum = function(nums, target) {
    // We'll use a Map to keep track of the indices of the numbers we've seen
    // so far, with the value of the number as the key and the index as the value.
    const numMap = new Map();

    // Loop through the array of numbers.
    for(let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number, which is the
        // difference between the target and the current number.
        let complement = target-nums[i];

        // If we've already seen a number that is the complement of the current
        // number, return the indices of that number and the current number.
        if(numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        // Otherwise, add the current number and its index to the map.
        numMap.set(nums[i], i);
    }

    // If no pair of numbers adds up to the target value, return an empty array.
    return [];
};
