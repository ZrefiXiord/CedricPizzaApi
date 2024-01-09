const superagent = require("superagent");
function getDistributeurs(){
    return superagent.get("https://appyness.mypizzadoor-pro.com/web/ols/apds")
    .set("Host","appyness.mypizzadoor-pro.com")
    .set("Connection","keep-alive")
    .set("sec-ch-ua",'"Not_A Brand";v="8", "Chromium";v="120", "Android WebView";v="120"')
    .set("Accept","application/json, text/plain, */*")
    .set("Adial-web","YoEOfQy4Y8uMamXR7CRnj0wDJOm2auuYZagFs3lwM")
    .set("sec-ch-ua-mobile","?1")
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

    }).then(distribs => {
        return distribs;
    })
    .catch(err =>{
        console.log(err.response);
    });
}
function parseDistributeurs(request){
    result=[];
    request.apds.forEach(element => {
        result.push([element.address, element.id]);
    });
    return result;
}



module.exports = { getDistributeurs, parseDistributeurs}