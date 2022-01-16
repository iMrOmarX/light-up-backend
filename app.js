const five = require("johnny-five");
const board = new five.Board();


const express = require('express')
const app = express()
const port = 3000


board.on("ready", () => {
    
    const ledOne = new five.Led(13);
    const ledTwo = new five.Led(12);
    
    app.get('/on', (req, res) => {
        
        ledOne.on()
        ledTwo.on()
        res.send({})
    })
    
    app.get('/off', (req, res) => {
        
        ledOne.off()
        ledTwo.off()
        res.send({})
    })


    app.listen(port , ()=>{
        console.log("Server is up on port " + port)
    })

    

});