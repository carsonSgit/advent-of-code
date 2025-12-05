import * as fs from 'fs';

const filePath: string = './day4/input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');

const department: string[] = input.split('\n').map(row => row.trim());

let reachableRoll: number = 0;
let directions: Record<string, number[]> = {
    'topL': [-1, -1],
    'topM': [0, -1],
    'topR': [1, -1],
    'midL': [-1, 0],
    'midR': [1, 0],
    'bottomL': [-1, 1],
    'bottomM': [0, 1],
    'bottomR': [1, 1]
};

for (let i = 0; i < department.length; i++) {
    for (let j = 0; j < department[i].length; j++) {
        if (department[i][j] !== '@')
            continue;
        
        let neighbors: number = 0;

        for (const direction in directions) {
            const r = i + directions[direction][0];
            const c = j + directions[direction][1];

            if (isAdjacent(r, c, department))
                neighbors++;
        }
        if (neighbors < 4)
            reachableRoll++;
    }
}

function isAdjacent(r: number, c: number, department: string[]): boolean {
    return r >= 0 && r < department.length && c >= 0 && c < department[r].length && department[r][c] === '@';
}

console.log(reachableRoll);