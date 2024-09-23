import express from 'express'
import path from 'path'

import {fileURLToPath} from'url'



const app=express();
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(express.static('public'))  
app.use(express.json());


app.use("/Controllers",express.static(path.join(__dirname, '/Controllers')))
const PORT=3000;

app.get('/',(req,res)=>{

  //  res.send("hello")
  
  res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.post('/api/v1',(()=>{
  
}))
app.listen(PORT,()=>{
  // console.log(__dirname)
    console.log("App is listen on port:" +PORT)
})