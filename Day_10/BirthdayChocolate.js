'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function birthday(n,s, d, m) {

    if (n >= m) {
        let counter = 0;
        let indexStart = 0;
        while (n >= m) {
            let sum = 0;
            let indexEnd = indexStart + m;
            for (let i = indexStart; i < indexEnd; i++) {
                sum += s[i];
            }
            if (sum === d) {
                counter++;
            }
            indexStart++;
            n--;
        }
        return counter;
    } else {
        return 0;
    }
}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = birthday(n,s, d, m);

    ws.write(result + '\n');

    ws.end();
}
