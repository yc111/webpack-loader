
module.exports = function (source) {  
    console.log('normal excution');  
    return source;
}

// loader上的pitch方法，非必须
module.exports.pitch =  function() {
    console.log('pitching graph');
    console.log()
    // todo
}