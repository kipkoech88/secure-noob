// server.js

const express = require('express');
const PORT = process.env.PORT || 5000
const helmet = require('helmet')

// initializing app instance
const app = express();

//middlewares
app.use(helmet());

//basic API that returns 'hello world'
app.get("/", (req,res)=>{
    res.json("Hello world")
    }
    );

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});