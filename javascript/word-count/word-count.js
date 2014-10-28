function words (input) {
  var report = {};
  input = input.replace(/\n/g, ' ');
  input = input || '';
  input.split(' ').forEach(function (word) {
    if (report[word]) {
      report[word] = report[word] + 1;
      return;
    }

    report[word] = 1;

  });

  return report;
}

module.exports = words;
