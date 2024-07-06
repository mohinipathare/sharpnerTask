const express = require('express');
const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send(`<form action="/admin/login" method="POST"><input id="username" type="text" name="username" placeholder="enter username" /><button type="submit">Login</button></form> <script>
            document.getElementById('loginForm').addEventListener('submit', function(event) {
                var username = document.getElementById('username').value;
                localStorage.setItem('username', username);
            });
        </script>`)
});

router.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
})

module.exports = router;