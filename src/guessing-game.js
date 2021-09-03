class GuessingGame {
  constructor() {
    this.result = null;
    this.min = 0;
    this.max = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {

    this.result = Math.round((this.max - this.min) / 2 + this.min);
    return this.result;

  }

  lower() {
    this.setRange(this.min, this.result);
  }

  greater() {
    this.setRange(this.result, this.max);
  }
}

module.exports = GuessingGame;
