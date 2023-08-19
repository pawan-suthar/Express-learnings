//app.js
import express from 'express'
const app = express()
const port = process.env.PORT || 4000
import main from './routes/main.routes.js'

// EJS is a template engine commonly used with the Express.js web framework 
// in Node.js applications. It enables the creation of dynamic HTML content by embedding 
// JavaScript code within HTML templates. This allows developers to generate web pages 
// with dynamic data and logic on the server side. EJS templates can be rendered by Express.js to 
// produce HTML that is then sent to the client's web browser for display

// setup template engine
app.set('view engine','ejs')

// template use tag
// <%= %>

app.use('/',main)

//set path where templates are located by default it views
app.set('views','templatengine/views')

app.listen(port,(req,res)=>{
    console.log(`server started for templatengine on http://localhost:${port}`);
})