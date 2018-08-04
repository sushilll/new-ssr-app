const express = require("express");
import React from "react";
import { renderToString } from "react-dom/server";

import App from "./Components/App";

const app = express();

app.use(express.static("dist"));

app.get("*",(req,res)=>{
    console.log("--url ",req.url);

    const html = renderToString(<App />);

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="bootstrap.css">
        <title>Document</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="main.js"></script>
    </body>
    </html>
    `);
    
});

app.listen(3000, ()=>console.log("listening on 3000"));