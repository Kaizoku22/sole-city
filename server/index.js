const viewdir = '/home/kaizoku/home/web_dev/sole-city/client/views';
const app = require('express')();
const mustacheExpress = require('mustache-express');
const express =require('express');
const PORT = 3000;

app.set('view engine','mustache' );
app.set('views',viewdir)
app.engine('mustache', mustacheExpress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const home = require('./home.js');
const login = require('./login.js'); 
const registerUser = require('./registerUser.js');
async function main(){

app.use('/',home);
app.use('/login',login);
app.use('/register',registerUser);

app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)

});
}

main(); 
