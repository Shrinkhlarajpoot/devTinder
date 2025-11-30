const express =  require("express");
const app = express();



app.use("/test",(req,res)=>{
   res.send("This is from Test")
})
app.use("/hello",(req,res)=>{
   res.send("This is from hello")
})
app.use("/",(req,res)=>{
   res.send("This is from dashboard123")
})

app.listen(3000,()=>{
    console.log("Listening to port no 3000")
})