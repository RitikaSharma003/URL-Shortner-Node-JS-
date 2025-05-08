const express=require("express");
const app=express();
const {connectToMongoDB}=require("./connect")
const urlRoute=require('./routes/route')

const PORT=8002;
connectToMongoDB('mongodb://127.0.0.1:27017/Short-url').then(()=>console.log("mongodb connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/url",urlRoute);


app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
});