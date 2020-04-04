let table = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let turn = 'X';

const pickElement = function (row, col) {
  if (!table[row][col] && turn === 'X') {
    table[row][col] = 1;
  }
  if (!table[row][col] && turn === 'O') {
    table[row][col] = 10;
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

const on_click = function (row, col) {
  pickElement(row, col);

  let count = checkHorizontally(col) + checkVertically(row) + checkMinor();

  if (!!count) {

  } else {


  }


}