/**
 * Leetcode Problem 2: Add Two Numbers
 * 
 * Time Complexity: O(max(m, n)) 
 * Space Complexity: O(max(m, n))
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     // Initialize a new node with a value and a pointer to the next node.
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Adds two numbers represented as linked lists and returns the sum as a linked list.
 * @param {ListNode} l1 - The first linked list.
 * @param {ListNode} l2 - The second linked list.
 * @return {ListNode} - The sum of the two linked lists as a linked list.
 */
var addTwoNumbers = function(l1, l2) {
    // Initialize a dummy node to hold the result.
    let dummy = new ListNode(0);
    // Initialize a pointer to the current node in the result list.
    let p = dummy;
    // Initialize a carry to 0.
    let carry = 0;

    // Loop until both lists and the carry are exhausted.
    while(l1 || l2 || carry) {
        // Get the values of the current nodes in the two input lists, or 0 if the list is empty.
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        // Calculate the sum of the two values and the carry, and update the carry.
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        // Add a new node to the result list with the remainder of the sum.
        p.next = new ListNode(sum % 10);
        // Move the pointer to the next node in the result list.
        p = p.next;
        // Move to the next node in the input lists, if they exist.
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    // Return the result list, starting from the second node (the first node being the dummy node).
    return dummy.next;
};

