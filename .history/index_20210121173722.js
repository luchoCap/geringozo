const geringozo = function(str){

    /* YOUR CODE HERE */
    //let arrayGeringoso = str.split("")
    //console.log('arrayGeringoso',arrayGeringoso)
    console.log(str)
    str.replace(/a/g,'apa')
    str.replace(/e/g,'epe')
    str.replace(/i/g,'ipi')
    str.replace(/o/g,'opo')
    str.replace(/u/g,'upu')

    console.log('str',str)
    return str
}

module.exports = geringozo
