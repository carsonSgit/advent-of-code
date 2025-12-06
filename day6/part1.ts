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

    const problemRows = rows.map(r => r.slice(start, end));
    const operator: '+' | '*' = problemRows[height - 1].includes('+') ? '+' : '*';

    const numbers = problemRows.slice(0, -1)
        .flatMap(r => (r.match(/\d+/g) || []).map(Number));

    total += operator === '+' 
        ? numbers.reduce((a, b) => a + b, 0) 
        : numbers.reduce((a, b) => a * b, 1);
}

console.log(total);
