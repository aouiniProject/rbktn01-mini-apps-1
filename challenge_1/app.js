let table = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let turn = 'X';

const pickElement = function (row, col, id) {
  if (!table[row][col] && turn === 'X') {
    table[row][col] = 1;
    document.getElementById(id + 'p').innerHTML = 'X';
  }
  else if (!table[row][col] && turn === 'O') {
    table[row][col] = 10;
    document.getElementById(id + 'p').innerHTML = 'O';
  }
}

const checkHorizontally = function (col) {
  let count = 0;
  table.map(element => {
    count += element[col];
  })

  return count === 30 || count === 3 ? true : false
}

const checkVertically = function (row) {
  let count = 0;
  table[row].map(element => {
    count += element;
  })

  return count === 30 || count === 3 ? true : false
}

const checkMinor = function () {
  let count = 0;

  for (let i = 0; i < table.length; i++) {
    count += table[i][i];
  }
  return count === 30 || count === 3 ? true : false
}

const checkMajor = function () {
  let count = 0;

  for (let row = table.length - 1; row > -1; row--) {
    let col = row === 3 ? 0 : row === 1 ? 1 : 2

    count += table[row][col]
  }
  return count === 30 || count === 3 ? true : false
}

const reset = function () {
  trun = 'X';
  table = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  for (let i = 1; i < 11; i++) {
    document.getElementById(i + 'p').innerHTML = ''
  }
}

const on_click = function (row, col, id) {
  console.log(row, col, id)

  pickElement(row, col, id);
  let element = document.getElementById(id)

  let count = checkHorizontally(col) + checkVertically(row) + checkMinor() + checkMajor();

  if (!!count) {
    alert('Player ' + turn + ' has won the game !')
    reset()
  } else {
    if (turn === 'X') turn = 'O'
    else if (turn === 'O') turn = 'X'
  }

}
