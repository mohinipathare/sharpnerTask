// const path = require('path');
// const http = require('http');
// const express= require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const port = 8000;

// const adminRoute = require('./routes/admin.js');
// const shpoRoute  = require('./routes/shop.js');
// // const loginRoute = require('./routes/login.js');
// // const chatRoute = require('./routes/chat.js');
// const contactRoute = require('./routes/contactus.js');
// app.use(bodyParser.urlencoded({extended: false}));
// // app.get('/',(req,res)=>{
// //     console.log("hello from express");
// // })

// // app.use('/home',(req, res, next)=>{
// //     console.log("In next middleware");
// //     res.send("hello from express home middleware");
// //     // next();
// // });

// // app.use(bodyParser.json());

// // app.use('/admin',loginRoute)
// app.use('/admin',adminRoute);
// // app.use('/admin',chatRoute);
// app.use('/admin',contactRoute);
// app.use(shpoRoute);

// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','error.html'))
// })

// const server = http.createServer(app);
// server.listen(port);
// // app.listen(port,()=>{
// //     console.log("Running on port: ",port);
// // })

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const successRoute = require('./routes/success.js');
const app = express();
const port = 8000;
const adminRoute = require('./routes/admin.js');
const shpoRoute  = require('./routes/shop.js');
const contactRoute = require('./routes/contactus.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoute);
app.use(shpoRoute);
app.use('/admin',contactRoute);
app.use(successRoute);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});
