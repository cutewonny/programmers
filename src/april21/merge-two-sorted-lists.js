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
 var mergeTwoLists = function(list1, list2) {
     let resultArray = [];
     list1.forEach(function(element,index){
        list2.forEach(function(element2, index2){
            if(element>=element2){
                list1.splice(index,0,element2);
                console.log(list1)
            }else if(element<element2){
                list1.splice(index+1,0,element2);
                console.log("ele2가 크다",list1)
            }
            

        });
     });
     resultArray=list1;

     return resultArray;
    
};

let list1 = [1,2,4], list2 = [1,3,4];
let result = mergeTwoLists(list1,list2);  // [1,1,2,3,4,4]
console.log(result);