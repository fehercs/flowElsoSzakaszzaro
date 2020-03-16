const readline = require('readline-sync');

const readData = () => {
  const arrSize = [];
  arrSize.push(parseInt(readline.question('Enter the number of rows!\n')));
  arrSize.push(parseInt(readline.question('Enter the number of columns!\n')));
  return arrSize;
};

const generateMatrix = (n, m) => {
  const matrix = new Array(n);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(m);
  }
  return matrix;
};

const fillMatrixWithPows = (matrix) => {
  let pow = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = pow;
      if (pow === 1) pow += 1;
      else pow *= 2;
    }
  }
};

const main = () => {
  const size = readData();
  const matrix = generateMatrix(size[0], size[1]);
  fillMatrixWithPows(matrix);
  console.log(matrix);
};

main();
