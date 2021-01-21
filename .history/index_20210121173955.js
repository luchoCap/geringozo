const geringozo = function(str){

    /* YOUR CODE HERE */

    console.log(str)
    let strFinal = str.replace(/a/g,'apa').replace(/e/g,'epe').replace(/i/g,'ipi').replace(/o/g,'opo').replace(/u/g,'upu')

    console.log('str',strFinal)
    return str
}

module.exports = geringozo
