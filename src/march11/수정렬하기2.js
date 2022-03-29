// https://www.acmicpc.net/problem/2751
const fs = require('fs');
const input = fs.readFileSync('/dev/dtdin').toString().trim().split('\n').map(num => parseInt(num));

let N = input.shift;
let sorted = input.sort((a, b => b - a));
sorted.forEach(e => { console.log(e); });