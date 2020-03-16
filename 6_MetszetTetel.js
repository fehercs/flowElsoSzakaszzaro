const metszet = (arr1, arr2) => {
  let target = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (!target.includes(arr1[i])) {
        if (arr1[i] === arr2[j]) {
          target.push(arr1[i]);
        }
      }
    }
  }
  return target;
};
