// server.js

const express = require('express');
const PORT = process.env.PORT || 5000

// initializing app instance
const app = express();

//basic API that returns 'hello world'
app.get("/", (req,res)=>{
    res.json("Hello world")
    }
    );

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});