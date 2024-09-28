import express from "express";
const app = express();
const port = 3000;

app.get("/",  (req, res) =>{
    res.send("Hello World");
    //console.log(req.rawHeaders);
})

app.get("/about",  (req, res) =>{
    res.send("About US");
    //console.log(req.rawHeaders);
})

app.get("/contact",  (req, res) =>{
    res.send("<h1> CONTACT US <h1>");
    //console.log(req.rawHeaders);
})


app.listen(port, () => {
    //Listen to the port and return anything from below anyonomous function.
    console.log(`Server running on port ${port}.`);

})