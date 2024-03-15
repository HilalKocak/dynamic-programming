/**
 count paths
Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.
 */

const countPaths = (grid, r=0, c=0, memo={}) => {
    const pos = r + "," + c
    if(pos in memo) return memo[pos]

    // We only count valid paths
    if(r === grid.length || c === grid[0].length || grid[r][c] === "X") return 0

    // If we already at bottom right we will count 0
    if(r === grid.length - 1 && c === grid[0].length - 1) return 1

    const rightCount = countPaths(grid, r, c+1, memo)
    const downCount = countPaths(grid, r+1, c, memo)

    memo[pos] = rightCount + downCount

    return memo[pos]

}


const grid = [
    ["O", "O", "X"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ];
console.log(countPaths(grid))