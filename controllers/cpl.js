const routerCpl = require('../routes/cpl');
const outputcpl = '';
function getCpl (req,res, next)  {
    res.status(200).render('cpl', 
    {
        outputcpl
    })

}
function postCpl(req,res,next) {
    const p = Number(req.body.num1);
    const inv = parseFloat(req.body.num2);
    const output = inv / p;
    if(p>1 || inv>1){
        return res.status(400).render('cpl', {
            outputcpl: "P(A ∩ B) and P(B) cannot be greater than one "
        })
    }
    if(output>1){
    console.log("output", output)
        return res.status(400).render('cpl',{
        outputcpl:"The P(A | B) cannot be grater than one"    
         })
    }
    res.status(200).render('cpl',{
        outputcpl:"P(A | B) = "+ output       
    })
};
module.exports = {
    getCpl,
    postCpl
}
