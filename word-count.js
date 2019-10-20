//
// This is only a SKELETON file for the "Word Count" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Words() {};

Words.prototype.count = function (str) {
//
let result = {};
      let x = str.toLowerCase();
      let words = x.split(" ");
      
      for(let i =0 ; i< words.length; i++){
          let word = words[i]; 
          
          if(result[word] > 0){
              result[word]++;
          }else{
              result[word]=1;
          }
      }
      return result;
//
};

module.exports = Words;
