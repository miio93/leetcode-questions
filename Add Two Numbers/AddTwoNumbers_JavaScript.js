/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    // Pointers
    var l1p = l1;
    var l2p = l2;

    // Power of 10 current value
    var exp = 0;

    // Totals
    var l1t = 0;
    var l2t = 0;

    // Get number totals from list
    while(l1p !== null || l2p !== null){
        if(l1p !== null){
            l1t += l1p.val*(Math.pow(10,exp));
            l1p = l1p.next;
        }
        if(l2p !== null){
            l2t += l2p.val*(Math.pow(10,exp));
            l2p = l2p.next
        }
        exp += 1;
    }

    // Add totals
    var total = l1t + l2t;

    // Convert to string, then to array, reverse
    var s = total.toString().split('').reverse();
    var solution = null;
    var p = solution;

    // Convert array to list
    for(var i=0; i<s.length; i++){
        if(solution == null){
            solution = new ListNode(s[i]);
            p = solution;
        } 
        else{
            p.next = new ListNode(s[i]);
            p = p.next;
        }
    }

    if(solution == null) solution = new ListNode(0);
    return solution;
};