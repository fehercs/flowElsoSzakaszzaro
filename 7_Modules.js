const add = (n1, n2) => {
  return n1 + n2;
};

const sub = (n1, n2) => {
  return n1 - n2;
};

const mul = (n1, n2) => {
  return n1 * n2;
};

const div = (n1, n2) => {
  if (n2 === 0) return 'No no no no no no!';
  return n1 / n2;
};

module.exports = {
  add,
  sub,
  mul,
  div
};
