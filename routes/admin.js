const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    // res.send('<form action="/add-product" method="POST" ><input type="text" name="title" placeholder="Enter Text"><button type="submit">Add</button></form>')
});

route.post('/add-product', (req,res, next)=>{
    console.log(req.body);
    // console.log("in the product middleware");
    res.redirect('/');
});

module.exports = route;