const createRealMazeDivs = () => {
  const mazeDiv = document.querySelector('#real-maze')
  for (let y = 0; y < (row * scale) + 1; y++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    mazeDiv.appendChild(rowDiv);

    for (let x = 0; x < (col * scale) + 1; x++) {
      let column = document.createElement('div');
      column.classList.add('real-cell');
      rowDiv.appendChild(column);
    }
  }
}

const mapWallsToDivs = () => {
  for(let x = 0; x < col; x++) {
    for(let y = 0; y < row; y++) {
      const cell = getIndex(x, y);
      const walls = grid[y][x].walls;

      if (walls[0]) {
        getCell(cell.top).classList.add('wall');
        getCell(cell.topLeft).classList.add('wall');
        getCell(cell.topRight).classList.add('wall');
      }
      if (walls[1]) {
        getCell(cell.right).classList.add('wall');
        getCell(cell.topRight).classList.add('wall');
        getCell(cell.bottomRight).classList.add('wall');
      }
      if (walls[2]) {
        getCell(cell.bottom).classList.add('wall');
        getCell(cell.bottomLeft).classList.add('wall');
        getCell(cell.bottomRight).classList.add('wall');
      }
      if (walls[3]) {
        getCell(cell.left).classList.add('wall');
        getCell(cell.topLeft).classList.add('wall');
        getCell(cell.bottomLeft).classList.add('wall');
      }
    }
  }
}

function getIndex(x, y) {
  x = scale * x + 1;
  y = scale * y + 1;
  
  return {
    center: [x, y],
    top: [x, y - 1],
    right: [x + 1, y],
    bottom: [x, y + 1],
    left: [x - 1, y],
    topLeft: [x - 1, y - 1],
    topRight: [x + 1, y - 1],
    bottomRight: [x + 1, y + 1],
    bottomLeft: [x - 1, y + 1],
  }
}

function getCell(index) {
  const cells = document.querySelectorAll('.real-cell');
  return cells[index[1] * (col * scale + 1) + index[0]];
}

function addEntryAndExit() {
  const entry = getCell([0, 1]);
  entry.classList.add('red');
  const exit = getCell([scale * col, scale * row - 1]);
  exit.classList.add('green');
}

createRealMazeDivs();
mapWallsToDivs();
addEntryAndExit();

