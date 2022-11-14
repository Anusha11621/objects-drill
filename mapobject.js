
  function mapObject(obj, cb) {
    for(let element in obj){
      obj[element] = cb(obj[element])
    }
    return obj
  }
  
  module.exports = {mapObject}