//
// This is only a SKELETON file for the "Word Count" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Words() {};

Words.prototype.count = function (input) {
  var counts = {};
  var words = input.match(/\S+/g);

  words.forEach(function (word) {
    var lcWord = word.toLowerCase();
    counts[lcWord] = counts.hasOwnProperty(lcWord) ? counts[lcWord] + 1 : 1;
  });

  return counts;
};

module.exports = Words;
