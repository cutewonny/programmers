function solution(n, lost, reserve) {
    let tmp = reserve.slice()
    console.log("tmp>>> ", tmp);

    for (let i in tmp) {
        console.log("lost.indexOf(tmp[i])>>> ", lost.indexOf(tmp[i]))
        let key = lost.indexOf(tmp[i])//잃어버린 배열 중에 여분과 일치하는 번호 찾기

        if (key != -1) {// 잃어버린애들 중에서 여분이 있으면
            lost.splice(key, 1);//slice(인덱스,인덱스) 원본 영향 안줌, splice(인덱스,개수) 원본 영향줌
            reserve.splice(reserve.indexOf(tmp[i]), 1);
        }
    }

    for (let i of reserve) {
        let key = lost.includes(i - 1) ? lost.indexOf(i - 1) : lost.indexOf(i + 1)

        if (key != -1) {
            lost.splice(key, 1)
        }
    }

    return n - lost.length
}

let n = 10;
let lost = [2, 3, 8, 9];
let reserve = [1, 2, 9, 10];
let result = solution(n, lost, reserve);
console.log("result", result);