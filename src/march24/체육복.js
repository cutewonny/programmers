var n = 5;
var lost = [2, 4];
var reserve = [1, 3, 5];
solution(n, lost, reserve);


function solution(n, lost, reserve) {
    var answer = 0;

    var arr = new Array();
    for (let i = 0; i < n; i++) {//모든 사람이 체육복을 가짐
        arr[i] = 1;
    }//각각1을 넣는다


    lost.forEach(function (element, index, array) {//잃어버린 사람 반영
        // console.log(element, index, array);
        arr[element - 1] = 0;

    });


    // 체육복 여벌있는 사람 반영

    reserve.forEach(function (element, index, array) {//잃어버린 사람 반영
        // console.log(element, index, array);
        arr[element - 1] = 2;

    });

    for (let i of arr) {
        console.log("arr: ", i);
    }// 배열 완성

    // 배열의 값이 0이라면 오른쪽에서 값을 가져온다.오른쪽이 2가 아니라면 왼쪽에서 가져온다.
    for (let i = 0; i < arr.length; i++) {
        let now = arr[i];
        if (now == 0) {
            let right = arr[i + 1];
            if (right == 2) {
                arr[i] = 1;
                arr[i + 1] = 1;
            } else {
                if (i > 0) {
                    let left = arr[i - 1];
                    if (left == 2) {
                        arr[i] = 1;
                        arr[i - 1] = 1;
                    }
                }
            }
        }
    }
    // 전체 1인 갯수를 구한다.



    // var test = lost.shift();
    // console.log(test);

    return answer;
}