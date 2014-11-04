function School () {
  this.data = {};
  return this;
};

School.prototype.roster = function () {
  return this.data;
};

School.prototype.sort = function () {
  var sortKeys = Object.keys(this.data).sort(),
      newData = {};

  sortKeys.forEach(function (key) {
    newData[key] = this.data[key].sort();
  }.bind(this));

  this.data = newData;
};

School.prototype.grade = function (grade) {
  if (this.data[grade]) return this.data[grade];
  return [];
};

School.prototype.add = function (name, grade) {
  this.data[grade] = this.data[grade] || [];
  this.data[grade].push(name);
  this.sort();
};

module.exports = School;
