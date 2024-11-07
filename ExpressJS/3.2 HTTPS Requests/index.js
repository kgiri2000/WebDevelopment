import express from "express";
const app  = express();
const port= 3000;

//app.get comes from express
app.get("/", (req,res) =>{
    res.send("<h1>Hello World <h1>");
});

//endpoints

app.get("/about", (req,res) => {
    res.send("I am Kamal Giri");
});
app.listen(port, () =>{
    console.log(`Server has started on port ${port}`)
});