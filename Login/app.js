const express = require("express")
// const collection = require("./mongo")
const cors = require("cors")
const usersauth = require("./mongo")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await usersauth.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{name, email, password, age, gender}=req.body

    const data = {
      name,
      email,
      password,
      age,
      gender
  };

    try{
        const check=await usersauth.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await usersauth.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})