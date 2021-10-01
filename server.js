const express = require("express");
const app = express();
const dotenv = require("dotenv"); //config.env dosyasına ulaşabilmek için dotenv import edildi
const routers = require("./routers/index.js")

//Environment Variables

dotenv.config({
    path: "./config/env/config.env"
});

const PORT =  process.env.PORT

app.use("/api", routers)

app.get("/api", (req,res) =>{

    res.send("Hello world");

});


app.listen(PORT,() => {
console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);

}); 