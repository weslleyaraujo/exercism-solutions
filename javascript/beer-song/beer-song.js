function Beer () {
  this.song = {
    start: '{{num}} bottles of beer on the wall, {{num}} bottles of beer.\n',
    end: 'Take one down and pass it around, {{num}} bottles of beer on the wall.\n',
    oneEnd: 'Take it down and pass it around, no more bottles of beer on the wall.\n',
    over: 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
  };
};

Beer.methods = {};

Beer.methods.replace = function (a, b) {
  if (b > 1) return a.replace(/{{num}}/g, b);

  return a.replace(/{{num}}/g, b)
    .replace(/bottles/g, 'bottle');
};

Beer.prototype.sing = function (begin, end) {
  var verses = '', count;
  if (!end) end = begin + 2;
  for (count = 0; count <= (end - 1) / 2; count++) {
    if ((begin - count) - 1 === 0) {
      verses = verses + Beer.methods.replace(this.song.start, begin - count) +
        this.song.oneEnd + '\n';
    }
    else {
      verses = verses + Beer.methods.replace(this.song.start, begin - count) +
        Beer.methods.replace(this.song.end, (begin - count) - 1) + '\n';
    }
  }

  if (count === begin) {
    verses = verses + 
      this.song.over + '\n';

    return verses;
  }

  return verses.replace(/\n$/, '');
};

Beer.prototype.verse = function (index) {
  var count, verse;
  if (index === 0) return '';

  if (index === 1) {
    verse = Beer.methods.replace(this.song.start, index)
      + this.song.oneEnd;
  }
  else {
    verse = Beer.methods.replace(this.song.start, index)
      + Beer.methods.replace(this.song.end, index -1);
  }
  return verse;
};

module.exports = new Beer;
