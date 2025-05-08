const express=require('express');
 const router=express.Router();
 const { handleGenerateNewshortURL, handleGetAnalytics }=require("../controller/url")
 
 
 
 router.post("/",handleGenerateNewshortURL);


 router.get("/analytics/:shortId",handleGetAnalytics);


 
module.exports=router;
