const express = require('express');
const router = express.Router();

router.get('/chat',(req,res,next)=>{
    res.send(`<form method="POST" action="/admin/chat"><input type="text" name="message" placeholder="Enter Message"/><button type="submit">Send</button></form>`)
});

module.exports = router;