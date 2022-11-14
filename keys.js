
function keys(obj){
    let array = []
    for (const item in obj) {
    array.push(item)
    }
    return array
}

module.exports = {keys}