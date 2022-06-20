const  express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const port = 8000;
const app = express();
const gplRouter = require('./routes/gpl');
const cplRouter = require('./routes/cpl');
const bplRouter = require('./routes/bpl');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs");
app.get('/api',(req,res) => {
    res.status(200).send("Life is a School of Probability");
})
 app.use("/api/gpl",gplRouter);
 app.use("/api/cpl",cplRouter);
 app.use("/api/bpl",bplRouter)
app.listen(port, () => {
    console.log(`app is running at port ${port}`);
})