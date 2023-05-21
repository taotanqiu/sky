const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
var locals = {
title: 'Page Title',
description: 'Page Description',
header: 'Page Header'
};
res.render('hot', locals);




})

exports.jiu=router



