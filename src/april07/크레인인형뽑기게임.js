// https://programmers.co.kr/learn/courses/30/lessons/64061

let board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
console.table(board);
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
let result = solution(board, moves);
console.log(result);


function solution(board, moves) {
    var answer = 0;
    // console.log("0: board[3][0] 배열 값 꺼내기: ", board[3][0]);

    // console.log("4: board[1][4] 배열 값 꺼내기: ", board[1][4]);

    // console.log("2: board[1][2] 배열 값 꺼내기: ", board[1][2]);

    //배열의 구조를 바꿔줘야할듯?
    // let arr = Array(5).fill(null).map(() => Array(5));
    let arr = Array.from(Array(5), () => new Array(5));

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            // arr[i].push(board[j][i]);
            arr[i][j] = board[j][i];

        }
    }
    console.table(arr);
    //배열 값 꺼내기

    // console.log("0: arr[0][3] 배열 값 꺼내기: ", arr[0][3]);

    // console.log("4: arr[4][1] 배열 값 꺼내기: ", arr[4][1]);

    // console.log("2: arr[2][1] 배열 값 꺼내기: ", arr[2][1]);

    let newArr = [];
    let temp;
    moves.forEach(element => {
        let idx = element - 1;
        let temp2 = arr[idx].length;

        for (let i = 0; i < temp2; i++) {
            // console.log("arr[idx].length", arr[idx].length);
            temp = arr[idx].shift();
            console.log("arr[idx] 값: ", arr[idx], " temp>> ", temp);
            if (temp != 0) {
                let pp = newArr.pop();
                console.log("pp>> ", pp);
                if (pp == temp) {
                    answer += 2;
                } else {
                    newArr.push(pp);
                    newArr.push(temp);
                }
                //넣으면서 겹치는 숫자 삭제하기
                break;
            }
        }

    });

    //겹치는 숫자 카운트
    // newArr.forEach(element, index, arr => {
    //     let now = element;
    //     if (index > 0) {
    //         let left = arr[index - 1];
    //         sa
    //     }

    // });


    // moves.forEach(element, index => {
    //     let temp = 0;
    //     let tempIndex = 0;
    //     for (let i = 0; i < arr[element - 1].length; i++) {
    //         temp = arr[element - 1][i];
    //         if (temp != 0) {
    //             tempIndex = i;
    //             newArr.push(arr[element - 1][i])
    //             break;
    //         }
    //     }
    // });
    console.log(newArr);





    return answer;
}

// 2차원 배열은 만든다

// 무브에서 2차원 배열에 있는 값들을 가져와 스택으로 쌓는다

// 쌓인 스택에서 같은 값이 나열된 갯수를 센다. = 사라진 인형의 개수 return
//console.table(animals)를 사용하면 콘솔창에서 2차원 배열 을 볼 수 있다.