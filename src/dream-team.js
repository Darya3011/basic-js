const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let name = "";
  members.sort();
  for (let i = 0; i < members.length; i ++) {
    let member = members[i];
    if (typeof member === 'string') {
      member = member.trim();
      if (member.length) {
        name = name + member[0];
      } 
    }
  } 
  name = name.toUpperCase();
  return name;
};
