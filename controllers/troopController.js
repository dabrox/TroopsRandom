const troopsType = require('../models/troopsType')
exports.getArmies = async function(req, res, next){
    var randomLimit = req.params.amount;
    var sum = 0;
    let army = await Promise.all( 
        troopsType.map((troop, i )=>{
            if(i===troopsType.length-1){
                return{
                    "name":troop.name,
                    "amount":randomLimit
                }
            }else{
                let ran = generateArmiesRandom(randomLimit, troopsType.length, i)
                sum+=ran
                randomLimit-=ran
            return {
                    "name":troop.name,
                    "amount":ran
                } 
            }
        })
    )
    res.send(army)
}
function generateArmiesRandom(randomLimit, troopsLength, i){
    var num = 0 
    while(num==0){
        num = Math.floor( Math.random()*((randomLimit-(troopsLength-i)+1))+1)
        console.log(num)
    }
    return num
}

