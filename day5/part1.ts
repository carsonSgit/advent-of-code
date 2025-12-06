import * as fs from 'fs';

const filePath: string = './day5/input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');

const [rangeBlock, numberBlock] = input.trim().split('\n\n');

const ranges = rangeBlock
    .trim()
    .split('\n')
    .map(line => line.trim().split('-').map(Number)) as [number, number][];

const nums = numberBlock
    .trim()
    .split('\n')
    .map(line => Number(line.trim()));

ranges.sort(
    (a: [number, number], b: [number, number]) => a[0] - b[0]
    );

const merged: [number, number][] = [];

for (const [start, end] of ranges) {
    if (merged.length === 0){
        merged.push([start, end]);
        continue;
    }

    const last = merged[merged.length - 1];
    if (start <= last[1]) {
        last[1] = Math.max(last[1], end);
    } else {
        merged.push([start, end]);
    }
}


let freshCount = 0;

for (const n of nums) {
    for (const [a, b] of merged) {
        if ( n < a) break;
        if (n >= a && n <= b) {
            freshCount++;
            break;
        }
    }
}

console.log(freshCount);