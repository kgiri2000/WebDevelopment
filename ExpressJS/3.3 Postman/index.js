import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res)=> {
    res.send("<h1> HOME PAGE <h1>");
});

app.post("/register", (req, res) => {
    //Sending resource to the server
    res.sendStatus(201);
})

app.put("/user/kamal", (req,res)=>{
    //Replacing the whole data
    res.sendStatus(200);
})

app.patch("/user/kamal",(req, res) => {
    //Patching single file
    res.sendStatus(200);
})

app.delete("/user/kamal", (req, res) => {
    //Deleting the user
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})