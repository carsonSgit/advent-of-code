import * as fs from 'fs';

const filePath: string = './day4/input.txt';
const input: string = fs.readFileSync(filePath, 'utf8');

const department: string[][] = input.split('\n').map(row => row.trim()).map(row => row.split(''));

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

while (true) {
    let removeRoll: Array<[number, number]> = [];

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
                removeRoll.push([i, j]);
        }
    }

    if (removeRoll.length === 0)
        break;

    for (const [r, c] of removeRoll) {
        department[r][c] = '.';
    }

    reachableRoll += removeRoll.length;
}


function isAdjacent(r: number, c: number, department: string[][]): boolean {
    if (r < 0 || r >= department.length) {
        return false;
    }
    if (c < 0 || c >= department[r].length) {
        return false;
    }

    return department[r][c] === '@';
}

console.log(reachableRoll);