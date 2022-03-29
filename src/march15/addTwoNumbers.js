/**
 * https://leetcode.com/problems/add-two-numbers/
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
var addTwoNumbers = function (l1, l2) {
    let temp1;
    let temp2;
    let result;
    let arr;
    console.log(typeof l1)
    console.log(typeof l2)

    // https://www.codegrepper.com/code-examples/javascript/javascript+array+reverse+not+working
    // const reverseArray = arr => arr.reduce((acc, val) => [val, ...acc], []);
    // console.log(reverseArray);

    // temp1 = reverseArray(l1);
    // console.log(l1);

    temp1 = (l1.reverse().join('') * 1);
    temp2 = (l2.reverse().join('') * 1);
    result = temp1 + temp2;
    console.log(typeof temp1, temp1);
    console.log(typeof temp2, temp2);
    console.log(typeof result, result);

    // result = result.toString();
    // console.log(typeof result, result);
    // Array.from(result);
    // console.log(typeof result, result);

    arr = result.toString().split("");
    console.log(arr);
    arr.reverse();
    console.log(arr);
    return arr;
};

// let l1 = [9, 9, 9, 9, 9, 9, 8], l2 = [9, 9, 9, 8];
let l1 = [2, 4, 3], l2 = [5, 6, 4];
let Output = [8, 9, 9, 9, 0, 0, 0, 1];

addTwoNumbers(l1, l2);