const row = 30;
const col = 15;
const scale = 2;
let grid = [];

class Cell {
  constructor(x, y) {
    this.row = x;
    this.column = y;
    this.walls = [true, true, true, true];
    this.visited = false;
    this.neighbors = [];
  }

  findNeighbors() {
    if (this.row > 0) {
      this.neighbors.push(grid[this.row - 1][this.column]);
    }
    if (this.column < col - 1) {
      this.neighbors.push(grid[this.row][this.column + 1]);
    }
    if (this.row < row - 1) {
      this.neighbors.push(grid[this.row + 1][this.column]);
    }
    if (this.column > 0) {
      this.neighbors.push(grid[this.row][this.column - 1]);
    }
  }
}

function makeGrid() {
  for (let i = 0; i < row; i++) {
    grid[i] = [];
    for (let j = 0; j < col; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
}

function assignNeighbors() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      grid[i][j].findNeighbors();
    }
  }
}

makeGrid();
assignNeighbors();