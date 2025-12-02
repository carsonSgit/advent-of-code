import * as fs from 'fs';

const filePath: string = './day2/input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');
const ids: Map<number, number> = new Map<number, number>();
let sum: number = 0;

input.split(',').forEach(id => ids.set(Number(id.split('-')[0]), Number(id.split('-')[1])));

function isInvalid(id: number): boolean {
    // convert back to string for slicing
    const idString: string = id.toString();

    // can only be repeated sequence if the length is even
    if (idString.length % 2 !== 0) return false;

    const half = idString.length / 2;
    const firstHalf = idString.slice(0, half);
    const secondHalf = idString.slice(half);

    // check if first half is the same as second half
    return firstHalf === secondHalf;
}

ids.forEach((end, start) => {
    for (let n = start; n <= end; n++) {
        if (isInvalid(n)) sum += n;
    }
});

console.log(sum);