const alphabet = [...Array(26).keys()].map(s => String.fromCharCode(97 + s));

class Pangram {
  constructor(word = '') {
    this.word = word
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g, '')
      .normalize()
      .toLowerCase();
  }

  isPangram() {
    const { word } = this;
    return alphabet.map(s => new RegExp(s)).every(r => r.test(word));
  }
}

module.exports = Pangram;
