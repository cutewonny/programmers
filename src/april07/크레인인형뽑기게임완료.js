// https://programmers.co.kr/learn/courses/30/lessons/64061

let board = [[0, 0, 0, 99, 100], [0, 0, 100, 10, 3], [0, 2, 5, 88, 10], [4, 2, 4, 4, 22], [3, 5, 1, 8, 1]];
console.table(board);
let moves = [1];
let result = solution(board, moves);
console.log(`터진 갯수: ${result}`);

function solution(board, moves) {
    var answer = 0;

    let arr = Array.from(Array(board.length), () => new Array(board.length));

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // arr[i].push(board[j][i]);
            arr[i][j] = board[j][i];

        }
    }
    console.table(arr);

    let newArr = [];
    let temp;
    moves.forEach(function (element, index) {
        let idx = element - 1;
        let temp2 = arr[idx].length;
        console.log(`idx ${idx} : newArr: ${newArr}   temp2 ${temp2}`);
        for (let i = 0; i < temp2; i++) {//행에 속한 열에서 값이 있을때까지 움직인다. 열의 길이는 변한다.
            temp = arr[idx].shift();
            console.log(`arr[${idx}] 값: `, arr[idx], " temp>> ", temp);
            if (temp > 0) {
                if (index == 0) {//처음엔 newArr push만 한다. 뺄게 없다.
                    newArr.push(temp);
                } else {
                    let pp = newArr.pop();//이전 값이 존재한다.
                    console.log("이전값>> ", pp);
                    if (pp == temp) {// 이전값과 현재 넣는 값이 같으면 둘다 newArr에 넣지 않는다
                        console.log("펑")
                        answer += 2;
                    } else {// 이전값과 현재 넣는 값이 다르면 둘다 newArr에 넣는다
                        newArr.push(pp);
                        newArr.push(temp);
                    }
                }
                break;//열에서 0외의 값을 만나면 멈춘다, 즉 인형하나를 뽑음
            }
        }

    });
    console.log(newArr);

    return answer;
}
