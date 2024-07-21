//importing express
const express = require('express');
const UserRouter=require('./routers/UserRouter');

//initialize express
const app = express();

const port = 5000;

//middleware
app.use('/user', UserRouter);

//end point or route(to let the server accept the request)
app.get('/',(req, res)=>{
    res.send('response from express');
});

app.get('/add',(req, res)=>{
    res.send('response from add')
});

app.get('/all',(req, res)=>{
    res.send('ressponse from all')
});

app.get('/update',(req,res)=>{
    res.send('update')
});


//starting the  express server
app.listen(port, ()=>{
    console.log('server started');

});