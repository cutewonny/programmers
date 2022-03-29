// https://programmers.co.kr/learn/courses/30/lessons/12954
/*
함수 solution은 정수 x와 자연수 n을 입력 받아,
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴
    x는 -10000000 이상, 10000000 이하인 정수입니다.
    n은 1000 이하인 자연수입니다.
*/

let x = 2;
let n = 5;
let answer = solution(x, n); //[2,4,6,8,10]
console.log(answer);

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}