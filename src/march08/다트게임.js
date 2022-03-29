// let dartResult = "1S2D*3T"; //1^1 * 2 + 2^2 * 2 + 3^3

let dartResult = "1D 2S# 10S";// 1D   2S#  10S
let answer = solution(dartResult);
console.log("answer>>> ", answer);//37


function solution(dartResult) {
    var answer = 0;
    // let arr = new Array(dartResult);//안됨
    // let arr = Array.from(dartResult);//문자열을 배열로
    let arr = [...dartResult];//문자열을 배열로
    let pre_temp_num = 0;//이전값
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i++] * 1;//숫자문자를 받음
        console.log("type of num> ", typeof num, num);
        if (num === 1) {
            let temp = arr[i] * 1;
            if (temp === 0) {
                num = 10;
                i++;
            }
        }
        console.log("type of num> ", typeof num, num);

        if (arr[i] === "D") {
            num = Math.pow(num, 2);
        } else if (arr[i] === "T") {
            num = Math.pow(num, 3);
        }
        i++;
        console.log("i>> ", i, ", arr[i]>>> ", arr[i], '총합>>>> ', answer);

        //아래 로직은 있으면 하고 없으면 안함
        if (arr[i] === "*") {
            num = num * 2;
            i++;
            console.log("answer: ", answer);
            console.log("pre_temp_num: ", pre_temp_num);
            answer = answer + pre_temp_num;//이전 값을 더한다.
            console.log('총합>>>> ', answer);
        } else if (arr[i] === "#") {
            num = num * (-1);
            i++;
        }
        i--;//for문에서 +1 되기 때문에 미리 -1 한다.
        console.log("num>>>>> ", num); // 첫번째 값, 두번째 값

        answer += (num * 1);
        pre_temp_num = (num * 1);//이전값을 저장함
        console.log("i>> ", i, ", answer>> ", answer, ", pre_temp_num>> ", pre_temp_num);
    }
    return answer;
}