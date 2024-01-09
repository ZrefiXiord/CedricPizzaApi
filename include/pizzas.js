const superagent = require("superagent");

function getPizzas(id){
    return superagent.post("https://appyness.mypizzadoor-pro.com/web/ols/orders")
    .send({"apd":id})
    .set("Host","appyness.mypizzadoor-pro.com")
    .set("Connection","keep-alive")
    .set("Content-Length",String(10+id.length))
    .set("sec-ch-ua",'"Not_A Brand";v="8", "Chromium";v="120", "Android WebView";v="120"')
    .set("Accept","application/json, text/plain, */*")
    .set("Adial-web","YoEOfQy4Y8uMamXR7CRnj0wDJOm2auuYZagFs3lwM")
    .set("sec-ch-ua-mobile","?1")
    .set("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGRUb2tlbiI6IllvRU9mUXk0WTh1TWFtWFI3Q1JuajB3REpPbTJhdXVZWmFnRnMzbHdNIiwiaXNBbm9ueW1vdXMiOnRydWUsImlzcyI6IkFkaWFsT2xzIiwib3BlcmF0b3JJZCI6InVld3FodU1NZFJKN05maGZ4VE5hVmVPU2lobmJiQTExN2VvYnZ5TU9BR2Y4In0.1oJw8YfWFiDeiU2OIAxFY7xNXmD9JkvBaESSmIe6khY")
    .set("User-Agent","Mozilla/5.0 (Linux; Android 9; SM-J330FN Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/120.0.6099.145 Mobile Safari/537.36")
    .set("sec-ch-ua-platform",'"Android"')
    .set("Origin","https://adial-pizza.web.app")
    .set("X-Requested-With","appyness.pizzasdecedric")
    .set("Sec-Fetch-Site","cross-site")
    .set("Sec-Fetch-Mode","cors")
    .set("Sec-Fetch-Dest","empty")
    .set("Referer","https://adial-pizza.web.app/")
    .set("Accept-Encoding","gzip, deflate, br")
    .set("Accept-Language","fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7")
    .then(res =>{
        if(res.ok){
            return JSON.stringify(res.body);
        }

    }).then(pizzas => {
        return pizzas;
    });
}
/*
[
    {
        idPizza:id,
        nomPizza:nom,
        quantitePizza:quantite,
        prixPizza:prix,
        ingredientsPizza:[ingredient1, ing2,...]
    }

]
*/
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

module.exports = {getPizzas, parsePizzas}