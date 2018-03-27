const isEven = n => n % 2 === 0;

class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    const { year } = this;
    if (isEven(year / 4) || isEven(year / 100) || isEven(year / 400)) {
      return true;
    }

    return false;
  }
}

module.exports = Year;
