function findPath(keyParams, obj) {
    for (let key in obj) {                                         
        if(obj.hasOwnProperty(key)) {                             
            if(keyParams === key) return key;                        
            else if(obj[key] && typeof obj[key] === 'object') {  
                let path = findPath(keyParams, obj[key]);                
                if(path) return key + '.' + path;
            }
        }
    }
}

module.exports = findPath;
