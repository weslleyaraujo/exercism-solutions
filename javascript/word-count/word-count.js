function words (input) {
  var report = {};
  input = input.replace(/[\n\t]/g, ' ');
  input = input.replace(/  /g, ' ');
  input = input || '';
  input.split(' ').forEach(function (word) {
    if (report.hasOwnProperty(word)) {
      report[word] = report[word] + 1;
      return;
    }

    report[word] = 1;

  });

  return report;
}

module.exports = words;
