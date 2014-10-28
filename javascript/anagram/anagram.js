function anagram (input) {
  return {
    matches : function () {
      var words = arguments[0];

      if (typeof words === 'string') {
        words = Array.prototype.slice.call(arguments);
      }

      return words.filter(function (word) {
        var lowerWord = word.toLowerCase(),
          lowerInput = input.toLowerCase();

        if (lowerWord === lowerInput) return;

        if (anagram.sort(lowerWord) === anagram.sort(lowerInput) ) {
          return word;
        }
      });
    }
  }
}

anagram.sort = function (input) {
  return input.split('').sort().join('');
};

module.exports = anagram;
