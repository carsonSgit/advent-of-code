import * as fs from 'fs';

const filePath: string = './day2/input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');
const ids: Map<number, number> = new Map<number, number>();
let sum: number = 0;

input.split(',').forEach(id => ids.set(Number(id.split('-')[0]), Number(id.split('-')[1])));

function hasRepeatedSequence(id: number): boolean {
    // convert back to string for slicing
    const idString: string = id.toString();

    for (let i = 1; i <= Math.floor(idString.length / 2); i++) {
        // checks if the current pattern is repeated throughout the id, if so, return true, if not, continue
        const pattern = idString.slice(0, i);
        if (pattern.repeat(idString.length / i) === idString) return true;
    }

    return false;
}

ids.forEach((end, start) => {
    for (let n = start; n <= end; n++) {
        if (hasRepeatedSequence(n)) sum += n;
    }
});

console.log(sum);