// https://programmers.co.kr/learn/courses/30/lessons/12919

//seoul은 길이 1 이상, 1000 이하인 배열입니다.
//seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
let seoul = ["Jane", "Kim"];
let result = solution(seoul);
console.log(result);
let result2 = findKim(seoul);
console.log(result2);
// include boolean 반환
//`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`
// 문자열.match(찾을 단어)

//indexOf 는 찾는 값의 첫번째 위치 반환, 없을경우 -1을 리턴
//indexOf는... 배열에서 위치를 찾는구나..

function solution(seoul) {
    var answer = '';
    let pos = 0;
    seoul.forEach(function (element, index) {
        // console.log(element);
        if (element == 'Kim') {
            pos = index;
        }
    });

    answer = `김서방은 ${pos}에 있다`;
    return answer;
}

function findKim(seoul) {
    var idx = seoul.indexOf('Kim');//배열도 된다?
    return "김서방은 " + idx + "에 있다";
}