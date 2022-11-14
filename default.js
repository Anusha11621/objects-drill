function defaults(obj, defaultProps) {
    for (let elements in defaultProps){
        if(!obj[elements]){
            obj[elements] = defaultProps[elements]
        }
        
    }
    return obj
}

module.exports = {defaults}
