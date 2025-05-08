const express=require('express');
 const router=express.Router();
 const { handleGenerateNewshortURL }=require("../controller/url")
 
 
 
 router.post("/",handleGenerateNewshortURL);

module.exports=router;
