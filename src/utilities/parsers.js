function parseDistributors(request){
    result=[];
    request.apds.forEach(element => {
        dis={};
        dis.id=element.id;
        dis.name=element.address;
        result.push(dis);
    });
    return result;
}


function parsePizzas(request){
    let result=[];
    request.display.forEach(element => {
        pizza={}
        pizza.id=element.id;
        pizza.quantity=element.available;
        pizza.name=element.pizzaName;
        pizza.ingredients=element.ingredientsShort;
        pizza.price=element.cookedPrice;
        if(element.cookedPrice!==null){
            result.push(pizza); 
        }

    });
    return result;
}

module.exports = {parseDistributors, parsePizzas}