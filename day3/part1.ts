import * as fs from 'fs';

const filePath: string = './day3/input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');

const banks: string[] = input.split('\n').map(line => line.trim());

let bankTotals: Map<string, string> = new Map<string, string>();

banks.forEach(bank => {
    let max = -1;
    const jolts = bank.split('').map(Number);

    for (let i = 0; i < jolts.length; i++) {
        for (let j = i + 1; j < jolts.length; j++) {
            const value = jolts[i] * 10 + jolts[j];
            if (value > max) {
                max = value;
            }
        }
    }
    bankTotals.set(bank, max.toString());
})

let total: number = 0;
bankTotals.forEach((value) => {
    total += Number(value);
});

console.log(total);