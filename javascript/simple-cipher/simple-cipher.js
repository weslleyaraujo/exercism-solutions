const validate = s => {
  if (s === '') {
    return false;
  }

  if (s !== s.toLowerCase() || s.toLowerCase() === s.toUpperCase()) {
    return false;
  }

  return true;
};

const alphabet = [...Array(26).keys()].map(s => String.fromCharCode(97 + s));

class Cipher {
  constructor(key) {
    if (!key) {
      // TODO: make the key
      return;
    }

    if (validate(key)) {
      this.key = key;
      return;
    }

    throw new Error('Bad key');
  }

  encode() {}
  decode() {}
}

module.exports = Cipher;
