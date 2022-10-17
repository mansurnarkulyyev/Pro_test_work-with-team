const express = require("express");

const PORT = process.env.PORT || 3004

const app = express()

app.listen(PORT, (err) => {
     if (err) {
        return console.log(err);
     }
    
    console.log(`SERVER STARTING ${PORT}`);
})


app.get('/api', (req, res) => {
    res.json({
        message:'Hello from backend express.js connect'
    })
})