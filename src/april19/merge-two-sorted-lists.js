// https://leetcode.com/problems/merge-two-sorted-lists/
// list1과 list2로 정렬된 두 개의 링크된 목록의 선두가 주어집니다.
// 두 목록을 하나의 정렬된 목록에 병합합니다.목록은 처음 두 목록의 노드를 연결하여 만들어야 합니다.
// 병합된 링크 목록의 머리글을 반환합니다.
// 두 목록의 노드 수는[0, 50] 범위에 있습니다.
// - 100 <= Node.val <= 100
// list1과 list2는 모두 감소하지 않는 순서로 정렬됩니다.



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

    console.log(typeof list1)
    console.dir(list1)

    // splice 원본을 변형시킴 (시작인덱스, 몇개 삭제, 추가할 내용)

    Array.from(list1).forEach(function (ele, index, array) {
        list2.forEach(function (element2, index2) {
            if (ele > element2) {
                array.splice(index, 0, element2);

            } else {
                array.splice(index + 1, 0, element2);
            }
        });

    });
};

// Input:
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
let Output = mergeTwoLists(list1, list2);// [1, 1, 2, 3, 4, 4];
console.log(`Output: ${Output}`);