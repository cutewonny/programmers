// https://leetcode.com/problems/valid-parentheses/

/*
var isValid = function (s) {
    console.log("s의 문자열 길이>> ", s.length);
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            let now = s.charCodeAt(i);
            let next = s.charCodeAt(i + 1);
            console.log("next>>", next, "   now", now);
            if (next - now > 2) {
                return false;
            }
        }
    }
    return true;
};
 */
var isValid = function (s) {
    let result = true;
    let arr = new Array();//배열 선언

    s = s.split("");
    // console.log(s);

    s.forEach(function (element, index) {
        if (index == 0) {//처음값이 close면 아예 실패
            if (element == ")" || element == "]" || element == "}") {
                result = false;
            } else {
                arr.push(element)
            }
        } else {//두번째부터
            if (element == "(" || element == "[" || element == "{") {
                arr.push(element)
            }
            else {
                if (arr.length != 0) {
                    let temp = arr.pop()
                    if (temp == "(") {
                        if (element != ")") {
                            result = false;
                        }

                    } else if (temp == "[") {
                        if (element != "]") {
                            result = false;
                        }

                    } else if (temp == "{") {
                        if (element != "}") {
                            result = false;
                        }

                    }
                } else {
                    result = false;
                }
            }
        }

    });
    if (arr.length > 0) {
        result = false;
    }
    return result;
}



// let s = "()[]{}";//40, 41,/ 91, 93,/ 123, 125
// let s = "(}";// false
// let s = "{[]}" //true
// let s = "[";//false
let s = "[])";//false
let result = isValid(s);//true
console.log("result>> ", result);

