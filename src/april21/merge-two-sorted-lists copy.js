// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let resultArray = [];
    while (list1.length) {
        let temp = list1.shift();

        console.log("zzzz", temp)
        while (list2.length) {
            let temp2 = null;
            temp2 = list2.shift();
            console.log(temp2)
            if (temp - temp2 >= 0) {
                resultArray.push(temp2)
            } else {
                resultArray.push(temp)
                list2.unshift(temp2)
                break;
            }
        }
        if (list2.length == 0) {
            resultArray.push(temp)
        }
    }
    return resultArray;
};

let list1 = [1, 2, 4], list2 = [1, 3, 4];
let result = mergeTwoLists(list1, list2);  // [1,1,2,3,4,4]
console.log(result);