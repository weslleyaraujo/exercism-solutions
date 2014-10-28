var Hamming = {};
Hamming.compute = function (a, b) {
  b = b.split('');
  return a.split('').reduce(function (previous, current, index) {

    if (a[index] !== b[index]) {
      previous = previous + 1;
    }

    return previous;

  }, 0);
}

module.exports = Hamming;
