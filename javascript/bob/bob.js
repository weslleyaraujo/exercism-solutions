//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.methods = {};

Bob.methods.onlyAlpha = function (input) {
  try {
    return input.match(/([a-zA-Z])+/g).join('');
  } catch (e) {}

  return false;
};

Bob.methods.isQuestion = function (input) {
  return input.substr(-1) === "?" &&
    !!input.match(/[a-z0-9]\b/);
};

Bob.methods.isYell = function (input) {
  var alpha;

  if (input.match(/[äöüßÄÖÜ]/g)) {
    return input.substr(-1) === "!";
  }
  else {
    alpha = Bob.methods.onlyAlpha(input);

    try {
      return alpha.length === alpha.match(/[A-Z]/g).length; // matching only uppercase
    } catch (e) {}
  }

  return false;
};

// Keep the order
Bob.statements = [
  {
    name: 'nothing',
    answer: 'Fine. Be that way!',
    comparator: function (input) {
      return !!!input;
    }
  },

  {
    name: 'question',
    answer: 'Sure.',
    comparator: Bob.methods.isQuestion
  },

  {
    name: 'yell',
    answer: 'Whoa, chill out!',
    comparator: Bob.methods.isYell
  },

  {
    name: 'anything',
    answer: 'Whatever.',
    comparator: function () {
      return true;
    }
  }
];

Bob.prototype.createReport = function (statement, input, isDone) {
  input = input || '';
  statement = statement || {};

  this.report = {
    input: input.trim(),
    answer: statement.answer || '',
    done: isDone
  };
}

Bob.prototype.hey = function(input) {
  this.report = {};
  this.createReport(false, input, false);

  Bob.statements.forEach(function (statement) {
    if (!this.report.done) {
      if (statement.comparator(this.report.input)) {
        this.createReport(statement, this.report.input, true);
      }
    }
  }.bind(this));

  return this.report.answer;
};

module.exports = Bob;
