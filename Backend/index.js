const express = require("express");
const connectdb = require("./config/dbConfig");
const cors = require("cors");
const userRoute = require('./routes/userRoute')
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/api',userRoute);

app.get("/",(req,res)=>{
  return res.json({message: "welcome" })
})

connectdb().then(()=>{
  app.listen(port);
  console.log(`Server running and db connected at port ${port}!`);
}).catch(()=>{
  console.log("Server not running !");
})
