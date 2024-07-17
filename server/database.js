const { Pool } = require("pg");
const {createHash} = require('crypto');

const pool = new Pool({
    host:"localhost",
    user:"kaizoku",
    idleTimeOutMillies:30000,  
    database:"sole-city",
    password:"kaizoku",
    port:5432,
    max:20

})

const postsTable ="posts";
const usersTable ="app_users";
const passTable  ="user_passwords";
const sessionTable ="user_sessions";
function query(text,params,callback)
{
    return pool.query(text,params,callback);
};



function hash(pass){
return createHash('sha256').update(pass).digest('hex');
}


module.exports = { hash,query,postsTable,usersTable,passTable,sessionTable};

