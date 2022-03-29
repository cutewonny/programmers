// https://programmers.co.kr/learn/courses/30/lessons/68644
/*
정수 배열 numbers가 주어집니다.
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 
배열에 오름차순으로 담아 return
*/
//let numbers = [2, 1, 3, 4, 1];
let numbers = [2, 1, 3, 4, 1, 100, 99, 4];
let result = solution(numbers);
console.log("result:: ", result);//	[2,3,4,5,6,7]

function solution(numbers) {
    // numbers.sort();
    console.log(numbers);
    let index = 0;

    var answer = [];
    while (index < numbers.length) {
        let pre_num = numbers[index++];
        let index2 = index;
        if (index2 !== numbers.length) {
            while (index2 < numbers.length) {
                console.log("index2>> ", index2);
                let next_num = numbers[index2++];
                answer.push(pre_num + next_num);
            }
        }
        console.log("index>>>>>>>>>>>>> ", index);
    }
    console.log("answer>>>>>>>>>>>>> ", answer);
    answer = answer.filter((val, idx) => {
        return answer.indexOf(val) === idx;
    });
    answer.sort((a, b) => a - b);
    return answer;
}