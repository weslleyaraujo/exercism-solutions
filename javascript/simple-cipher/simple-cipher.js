const validate = s => (s === '' || /\d/.test(s) ? false : true);

const alphabet = [...Array(26).keys()]
  .map(s => String.fromCharCode(97 + s))
  .join('');

const randomKey = () =>
  [...Array(26)]
    .map(s => Math.floor(Math.random() * (97 + 26 - 97)) + 97)
    .map(s => String.fromCharCode(s))
    .join('');

class Cipher {
  constructor(key) {
    if (!key) {
      this.key = randomKey();
      return;
    }

    if (validate(key)) {
      this.key = key;
      return;
    }

    throw new Error('Bad key');
  }

  encode(text) {
    console.log(this.key);
  }

  decode(text) {}
}

module.exports = Cipher;
