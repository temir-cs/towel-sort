
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((acc, current, index) => index % 2 === 0 ? [...acc, ...current] : [...acc, ...current.reverse()], []);
}
