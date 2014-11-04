module.exports = function toRna(dna) {
  var conversion = { G: 'C', C: 'G', T: 'A', A: 'U' }; 
  dna = dna || '';
  return dna.split('').map(function (item) {
    return conversion[item];
  }).join('');
};
