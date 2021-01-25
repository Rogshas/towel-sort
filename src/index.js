
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0) return [] ;
    let res = matrix[0];
     
     for (i=1; i < matrix.length; i++) {
     
       i % 2 ? Array.prototype.push.apply(res, matrix[i].reverse()) : Array.prototype.push.apply(res, matrix[i]);
       
     
     }
    return res;
  }
