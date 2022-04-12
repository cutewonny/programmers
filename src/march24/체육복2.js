function solution(n, lost, reserve) {
    if (n < 2 || lost < 1 || reserve < 1) {
        return 0;
    }
    var answer = 0;

    let arr = new Array(n);//undefined
    console.log("arr: ", arr);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = 1;
        // console.log("arr[i]>> ", arr[i]);
    }

    lost.forEach(element => {
        arr[element - 1] -= 1;
    });

    reserve.forEach(element => {
        arr[element - 1] += 1;
    });

    for (var i = 0; i < arr.length; i++) {
        console.log("초기세팅 arr[", i, "]", arr[i]);//결과
    }

    //오른쪽이 2라면 가져온다 없으면 왼쪽
    for (var i = 0; i < arr.length; i++) {
        console.log("arr.length>>> ", arr.length);
        console.log("i + 1>> ", i + 1)
        if (arr[i] == 0) {
            if (i + 1 < arr.length) {
                let right = arr[i + 1];
                if (right == 2) {
                    arr[i] = 1;
                    arr[i + 1] = 1;
                } else {//오른쪽이 2가 아니네
                    if (i - 1 > 0) {//왼쪽에 값이 존재하면
                        let left = arr[i - 1];
                        if (left == 2) {
                            arr[i] = 1;
                            arr[i - 1] = 1;
                        }
                    }
                }
            } else if (i + 1 == arr.length) {//오르쪽은 없고 왼쪽만 존재함
                if (i - 1 >= 0) {//왼쪽에 값이 존재하면
                    let left = arr[i - 1];
                    if (left == 2) {

                        arr[i] = 1;
                        arr[i - 1] = 1;
                    }
                }
            }
        }

    }


    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 1) {
            answer += 1;
        }
        console.log("arr>> ", arr[i]);
    }
    return answer;
}

let n = 5;//20201
let lost = [2, 4];
let reserve = [1, 3];
let result = solution(n, lost, reserve);
console.log("result", result);