const troopsType = require('../models/troopsType')
exports.validationGetArmies = function(req, res, next){
    if(req.params.amount < troopsType.length){
        res.send('The amount should be greater or equal than: '+troopsType.length)
    }else if(req.params.amount == troopsType.length){
        let army = troopsType.map(troop=>{
            return {
                "name":troop.name,
                "amount":1
            }
        })
        res.send(army)
    }else{
        next()
    }
}