// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let output = new Array();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let temp = nums[i] + nums[j];
            if (temp === target) {
                output.push(i);
                output.push(j);
                break;
            }
        }

    }
    console.log(output);
    return output;

};

let nums = [2, 7, 11, 15], target = 9;
twoSum(nums, target);