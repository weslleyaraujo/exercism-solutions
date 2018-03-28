class Gigasecond {
  constructor(value) {
    this.value = value;
  }

  date() {
    return new Date(this.value.getTime() + 1000000000000);
  }
}

module.exports = Gigasecond;
