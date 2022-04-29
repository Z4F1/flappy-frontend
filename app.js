const express = require("express");
const app = express();

const fetch = require("node-fetch");

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const dataRes = await fetch("http://localhost:5522/api/scores");
    const data = await dataRes.json();
    
    res.render("home", {
        data: data
    });
});

app.listen(4210, () => {
    console.log("Listening on port 4210");
});