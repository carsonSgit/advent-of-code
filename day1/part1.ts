import * as fs from 'fs';

const filePath: string = './input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');

const lines: string[] = input.split('\n').map(line => line.trim());

let index: number = 50;
let password: number = 0;

lines.forEach(line => {
    line[0] == 'R' ? index += Number(line.slice(1)) : index -= Number(line.slice(1));
    if (index % 100 == 0) password++;
});

console.log("Password: " + password);