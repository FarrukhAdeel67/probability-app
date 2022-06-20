const router = require('../routes/gpl');
const result  = '';
function getGpl(req,res, next)  {
    res.status(200).render('index', 
    {
        result
    })
}

function postGpl(req,res, next)  {
    const p = Number(req.body.num1);
    const k = parseFloat(req.body.num2);
    if(!p && !k){
        return res.status(400).render("index",{
            result:"Input fields cannot be empty"
        })
    }
    if(p>1){
        return res.status(400).render('index',
        {
            result: "Probability cannot be greater than 1"
        })
    }
    const result = p * ((1-p) ** (k-1));
    console.log(result);
    res.status(200).render('index', 
   {
       result:"The result P(X=k) : " +result  
   })
};

module.exports = {
    postGpl,
    getGpl

}
