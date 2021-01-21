const geringozo = function(str){

    /* YOUR CODE HERE */

    console.log(str)
    let strFinal = str.replace(/ua/g,'apa').replace(/ue/g,'epe').replace(/ui/g,'ipi').replace(/uo/g,'opo').replace(/ue/g,'upu').replace(/a/g,'apa').replace(/e/g,'epe').replace(/i/g,'ipi').replace(/o/g,'opo').replace(/u/g,'upu')

    return strFinal
}

module.exports = geringozo
