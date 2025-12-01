// cool visualisation that helped: https://www.reddit.com/r/adventofcode/comments/1pb63uv/2025_day_01_part_2_example_visualized/

import * as fs from "fs";

const filePath: string = './input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');

const lines: string[] = input.split('\n').map(line => line.trim());

let index: number = 50;
let password: number = 0;

lines.forEach(line => {
    const direction = line[0];
    const rotation = Number(line.slice(1));

    for (let i = 0; i < rotation; i++) {
        direction === "R" ? index = (index + 1) % 100 : index = (index + 99) % 100;
        if (index === 0) password++;
    }
});

console.log("Password: " + password);
