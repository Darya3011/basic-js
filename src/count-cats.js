const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cat = 0;
  for (i = 0; i < matrix.length; i++) {
    let ar = matrix[i];
    for (a = 0; a < ar.length; a ++) {
      if (ar[a] == "^^") {
        cat = cat + 1;
      } 
    }
  }
  return cat;
};

    

