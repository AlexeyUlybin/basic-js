const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let number = 0; 
  for ( let part of backyard ) {
    for (let thing of part) {
      if (thing == '^^') { number++; }
    }
  }
  return number;
}

module.exports = {
  countCats
};
