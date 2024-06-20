const mustacheExpress = require('mustache-express')
const db = require('./database.js');
const router = require('express').Router();


router.get('/',function(req,res){
       res.render('index',{title:"Sole-City"});
    
})

router.get('/getPosts',async(req,res) =>{
      let result = await db.query(`SELECT * FROM ${db.postsTable}`);
    res.render('postList',result.rows[0]);
} );




module.exports = router;
