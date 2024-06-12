const express = require('express');
const app = express();


const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('I am Server sir running on port 4000');
});


app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
