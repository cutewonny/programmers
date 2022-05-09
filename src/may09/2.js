// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 
// 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때,
//  각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 
//  solution 함수를 완성해주세요.
// 123
// 456
// 789
// *0#

// let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// let hand = "right";
// let result = "LRLLLRLLRRL";


let numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let hand = "left";
let result = "LRLLRRLLLRR";


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let hand = "right";
// let result = "LLRLLRLLRL";


let rst= solution(numbers, hand);
console.log(rst);

// 왼손 * 1,4,7
// 오른손 # 3 6 9

function solution(numbers, hand) {
    var answer = "";
    let tempLeft = "*";
    let tempRight = "#";
    numbers.forEach( function(element, index) {
        if(element=="*"||element=="1"||element=="4"||element=="7"){
            answer+="L";
            tempLeft = element;

        }else if(element=="#"||element=="3"||element=="6"||element=="9"){
            answer+="R";
            tempRight = element;
        }else{
            let tl = tempLeft-element;
            let tr = tempRight-element;
            if(tl<0) tl = tl*-1;
            if(tr<0) tr = tr*-1;
            if(tl-tr>0){
                answer+="R";
                tempRight = element;
            }else if(tl-tr<0){
                answer+="L";
                tempLeft = element;
            }else if(tl-tr==0){
                if(hand=="left"){
                    answer+="L";
                    tempLeft = element;
                }else{
                    answer+="R";
                    tempRight = element;
                }
            }else{
                console.log(`element: ${element},     tempLeft: ${tempLeft}, tempRight: ${tempRight},`);
            }

        }
        
    });
    return answer;
}