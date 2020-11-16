const express = require('express');
const app = express();
const getUserInfoRouters = require('./routes/getUserInfoRouters');
const processRouters = require('./routes/processRouters');

app.use('/info', getUserInfoRouters);
app.use('/process', processRouters);

app.listen(8081,()=>{
    console.log('running...');
})