const numberOfElement = (arr, n) => {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) number++;
  }
  return number;
};
