const validate = s => (s === '' || !/[a-z]$/.test(s) ? false : true);

const alphabet = [...Array(26).keys()].map(s => String.fromCharCode(97 + s));

const randomKey = () =>
  [...Array(100)]
    .map(s => Math.floor(Math.random() * (97 + 26 - 97)) + 97)
    .map(s => String.fromCharCode(s))
    .join('');

class Cipher {
  constructor(key) {
    if (key === '') {
      throw new Error('Bad key');
    }

    if (typeof key === 'undefined') {
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
    const { key } = this;
    console.log(text, key);
    return '';
  }

  decode(code) {
    const { key } = this;
    return code
      .split('')
      .map((s, i) => {
        return key[i];
      })
      .join('');
  }
}

module.exports = Cipher;
