// middleWare-
// const express = require("express")
// const app = express()
// const middleWare = (req, res, next)=>{
//     console.log("middleware");
//     next()
// }

// app.use(middleWare);             // use this to run on all routes.

// If you want to run middleware in a specific route then write middleware variable name between route and function inside app.get
// app.get("/", function(req,res){
//     res.send("Main route");
// })

// app.get("/1", middleWare, function(req,res){
//     res.send("Main route 1");
// })

// app.get("/2", function(req,res){
//     res.send("Main route 2");
// })

// .listen(3000, ()=>{
//     console.log("app is running");
// })

// ----------------------------------------------express params----------------------------------------------------------------


// middleware function is used in order to check whether a user is authentic or not, whether the parameter send by the user is authentic or not
// two types of parameter - 1. url parameter (containes single value) and 2. query parameter (?key=value)
const express = require("express");
const app = express();

const middleWare = (req, res, next)=>{
    if(req.params.user_id==100){
        next()
    }else{
        res.send("Invalid")
    }
}

app.get("/:user_id/:product_id/:business_id", middleWare, function(req, res){       // I am using middleware in this particular route only
    console.log(req.params);
    console.log(req.query);
    res.send("Main Route")
})

.listen(3000, ()=>{
    console.log("server is running");
})