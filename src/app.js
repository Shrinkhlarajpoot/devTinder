const express =  require("express");
const app = express();
let arr = [{"id":1,"Fname":"Shrinkhla","Lname":"Rajpoot"},
    {"id":2,"Fname":"Shivani","Lname":"Rajpoot"}
]
app.get("/test",(req,res)=>{
   res.send("hello")
})
app.post("/test",(req,res)=>{
    arr.push({"id":3,"Fname":"  Pinku","Lname":"Rajpoot"})
    res.send(" dATA ADDED TO DDATABASE SUCESSFULLY")
})
app.delete("/test",(req,res)=>{
       arr.pop();
       res.send("Deleted Succesfuully...")
})


app.listen(3000,()=>{
    console.log("Listening to port no 3000")
})