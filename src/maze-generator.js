function MazeGenerator() {
  if (!current.visited) {
    current.visited = true;
    stack.push(current);
  }

  let unvisited = [];
  for (let neighbor of current.neighbors) {
    if (!neighbor.visited) {
      unvisited.push(neighbor);
    }
  }

  if (unvisited.length > 0) {
    let random = Math.floor(Math.random() * unvisited.length);
    let next = unvisited[random];

    let x = current.row - next.row;
    if (x === 1) {
      current.walls[0] = false;
      next.walls[2] = false;
    } else if (x === -1) {
      current.walls[2] = false;
      next.walls[0] = false;
    }

    let y = current.column - next.column;
    if (y === 1) {
      current.walls[3] = false;
      next.walls[1] = false;
    } else if (y === -1) {
      current.walls[1] = false;
      next.walls[3] = false;
    }

    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
}

current = grid[0][0];
stack = [];
do {
  MazeGenerator();
} while(stack.length > 0);