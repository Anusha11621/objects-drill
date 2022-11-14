const {items} = require("../data")
const {mapObject} = require("../mapobject")

const cb = x => {
    if(typeof x == 'string'){
        return x = x.split('').reverse().join('')
    }else{
        return x = x.toString().split('').reverse().join('')*1
    }
}

console.log(mapObject(items,cb))