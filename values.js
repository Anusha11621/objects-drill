


function values(obj){
  let array = []
  for (let item in obj){
    array.push(obj[item])
  }
  return array
}

module.exports = {values}