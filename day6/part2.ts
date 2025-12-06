import * as fs from 'fs';

const rows = fs.readFileSync('./day6/input.txt', 'utf8')
    .split('\n')
    .filter(r => r.trim());

const height = rows.length;
const width = Math.max(...rows.map(r => r.length));

let col = 0;
let total = 0;

while (col < width) {
    while (col < width && rows.every(r => (r[col] ?? ' ') === ' ')) col++;

    const start = col;
    while (col < width && !rows.every(r => (r[col] ?? ' ') === ' ')) col++;
    const end = col;

    const problemCols = rows.slice(0, height - 1).map(r => r.slice(start, end));

    const numbers: number[] = [];
    for (let c = 0; c < end - start; c++) {
        let numStr = '';
        for (let r = 0; r < height - 1; r++) {
            const ch = problemCols[r][c] ?? ' ';
            if (/\d/.test(ch)) numStr += ch;
        }
        if (numStr) numbers.push(Number(numStr));
    }
    numbers.reverse();

    const operator: '+' | '*' = rows[height - 1].slice(start, end).includes('+') ? '+' : '*';

    total += operator === '+' 
        ? numbers.reduce((a, b) => a + b, 0)
        : numbers.reduce((a, b) => a * b, 1);
}

console.log(total);
