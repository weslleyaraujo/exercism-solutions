function Robot () {
  this.reset();
  return this;
}

Robot.methods = {};

Robot.methods.alpha = function () {
  return Math.random()
    .toString(36)
    .replace(/[\d\.]/g, '')
    .substr(0, 2)
    .toUpperCase();
}

Robot.methods.numeric = function () {
  return Math.random().toString().substr(-3);
}

Robot.prototype.reset = function () {
  this.name = Robot.methods.alpha() + Robot.methods.numeric();
}

module.exports = Robot;
