var isValid = function (s) {
    let s = "({{}({)[]})"

    let open = ["[", "{", "("];
    let close = ["]", "}", ")"];

    let sum = 0;
    let stack = [];
    let result = true;

    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
            sum++;
            continue;
        }

        if (close.includes(s[i])) {
            if (open.indexOf(stack.pop()) == close.indexOf(s[i])) sum--;
        }
    }

    if (sum == 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}