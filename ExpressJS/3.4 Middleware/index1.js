import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
//It runs before the hand
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//we can input data in our index.html and when we click submit
//it will activate the .post which prints the req.bodys
app.post("/submit", (req, res) =>{
  //since we have the req.body then we can send somedata to our sever.
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
