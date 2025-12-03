import * as fs from 'fs';

const filePath: string = './day3/input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');

const banks: string[] = input.split('\n').map(line => line.trim());

const perBank: number = 12;
let total: number = 0;

banks.forEach(bank => {
    let begin = 0;
    let number: string = '';

    for (let remaining = perBank; remaining > 0; remaining--) {
        let maxNum = '0';
        let maxIndex = begin;

        for (let j = begin; j <= bank.length - remaining; j++) {
            if (bank[j] > maxNum) {
                maxNum = bank[j].toString();
                maxIndex = j;
            }
        }
        number += maxNum;
        begin = maxIndex + 1;
    }
    total += Number(number);
});

console.log(total);