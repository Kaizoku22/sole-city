
const db = require('./database.js');
const router = require('express').Router();
const {scryptSync, randomBytes} = require('crypto');

router.get('/',async (req,res) => {
    res.render('login');
});

router.post('/',async (req,res) =>{
    console.log(req.body);

    try{
        let result = await db.query('SELECT * from app_users WHERE user_email = $1',[req.body.email]);
        console.log(result.rows[0]);
      if(result.rows[0] === undefined){
            res.status(404).send('user not found try again with different email');
      }else {

        let user = await db.query(`SELECT user_uid FROM ${db.usersTable} WHERE user_email = $1`,[req.body.email]);
        console.log(user); 
        //creating the hash for the user password
        const hashedPass = db.hash(req.body.password);
        const salt = await db.query(`SELECT pass_salt FROM ${db.passTable} WHERE user_uid = $1`,[user.rows[0].user_uid]);
        const finalHash = scryptSync(hashedPass,salt.rows[0].pass_salt,64);
        const retrievedHash = await db.query(`SELECT pass_hash from ${db.passTable} WHERE user_uid = $1`,[user.rows[0].user_uid]);
         
        console.log(finalHash);
        console.log(retrievedHash.rows[0].pass_hash);

          if(finalHash.toString == retrievedHash.rows[0].pass_hash.toString){
              console.log('user logged in');
            res.send('user logged in');
          }
         

      }
      
    }
    catch(err){
        console.log(err);
    }
});






module.exports = router;



