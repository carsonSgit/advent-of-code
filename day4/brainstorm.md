```
if < 4 paper
	in range of 8 (8 adjacent)
	
number of columns: rollGrid[0].length
num row : rollGrid.length

foreach(row

..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.


xxx
x.x
xxx

(0,0) ->
	_-1,0

XXX
. X
XXX

(-1,-1) | (0,-1) | (1,-1)
--------|--------|-------
(-1,0)  | (0,0)  | (1,0)
--------|--------|-------
(-1,1)  | (0,1)  | (1,1)

let reachableRoll = 0

for each row:
	for each col:
		if grid[row][col] == '@':
			neighbours = 0
			for each of adjacent (dx, dy):
				r = row + dx
				c = col + dy
				if r&c !outOfBounds and grid[r][c] == '@':
					neighbours++
			if neighbours < 4:
				reachableRoll++
```