const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let dreamTeam = [];
  if (Array.isArray(members)) {
  for (let name of members) {
    if (typeof name === 'string') {
      let arr = name.split(' ').join('').toUpperCase();
      arr.split('');
      dreamTeam.push(arr[0]); }
    }
  dreamTeam.sort();
  let teamName = dreamTeam.join('');
  return teamName; 
} else { return false;}
}
module.exports = {
  createDreamTeam
};
