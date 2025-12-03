import * as fs from 'fs';

const filePath: string = './day3/input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');

const banks: string[] = input.split('\n').map(line => line.trim());

const perBank: number = 12;
let total: number = 0;

banks.forEach(bank => {
    let begin: number = 0;
    let outputJoltage: string = '';

    for (let remaining: number = perBank; remaining > 0; remaining--) {
        let batteryJoltage: string = '0';
        let maxIndex: number = begin;

        for (let j: number = begin; j <= bank.length - remaining; j++) {
            if (Number(bank[j]) > Number(batteryJoltage)) {
                batteryJoltage = bank[j];
                maxIndex = j;
            }
        }
        outputJoltage += batteryJoltage;
        begin = maxIndex + 1;
    }
    total += Number(outputJoltage);
});

console.log(total);