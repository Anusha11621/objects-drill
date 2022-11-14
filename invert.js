
function invert(obj) {
    var result = {};
    for(var key in obj){
      result[obj[key]] = key;
    }
    return result;
  }

module.exports = {invert}