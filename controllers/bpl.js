const routerBpl = require("../routes/bpl");
var result= '';
function getBpl(req,res, next){
    res.status(200).render('bpl', {
        result 
    })
}
function postBpl(req,res, next)  {
    const n = parseFloat(req.body.num1);
    const k = parseFloat(req.body.num2);
    const p = parseFloat(req.body.num3);
    console.log(n, k, p);
    var nfact = 1;
    for( i = 1; i <= n; i++)//n factorial
    { 
        nfact = nfact*i;
    }
    var kfact = 1;
    for( i = 1; i <= k; i++)//k factorial
    { 
        kfact = kfact*i;
    }
     var diff = n-k;
     var nmkfact = 1;
    for( i = 1; i <= diff; i++)//n minus k factorial
    { 
        nmkfact = nmkfact*i;
    }
    var combination = nfact/(kfact*nmkfact);
    var prob = p ** k;
    var probError = (1-p) ** (n-k);
    result = combination * prob * probError;
    console.log("result : ",result);
    console.log("combination : " , combination) ;
    if(result>1){
        return res.status(400).render('bpl',{
            result: "Probability cannot be greater than 1"
        })
    }
    res.status(200).render('bpl', {
        result: "The Bernoulli Law Result is : "+ result           
    })
}  
module.exports = {
    getBpl,
    postBpl
}