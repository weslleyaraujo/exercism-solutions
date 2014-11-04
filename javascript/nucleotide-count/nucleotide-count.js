function dna (type) {
  var history = { A: 0, T: 0, C: 0, G: 0 }, error;
  type = type || '';

  error = (type && !type.match(/[ATCG]/g) ||
    type.match(/[ATCG]/g) &&
    type.match(/[ATCG]/g).length !== type.length);

  if (error) throw new Error('You cant use that');

  // fill history
  type.split('').forEach(function (item) {
    if (history[item]) {
      history[item] = history[item] + 1;
      return;
    }

    history[item] = 1;
  });

  return {
    count: function (item) {
      return history[item];
    },

    histogram: function () {
      return history;
    }
  }
};


module.exports = dna;
