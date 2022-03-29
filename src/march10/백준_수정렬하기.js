const fs = require('fs');
const input = fs.readFileSync('/dev/dtdin').toString().trim().split('\n').map(num => parseInt(num));

let N = input.shift();
let sorted = input.sort((a, b => a - b));

// for (let i = 0; i < N; i++) {
//     console.log(sorted[i]);
// }

sorted.forEach(e => { console.log(e); });