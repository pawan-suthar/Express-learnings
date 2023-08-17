// const express = require('express') es5
import express from 'express' //es6
const app = express()
const port = process.env.PORT || 3000

/* --------------------------------- routes --------------------------------- */

// string paths
app.get('/',(req,res)=>{
    res.send("Default page")
})
app.get('/about',(req,res)=>{
    res.send("about page")
})

app.get('/contact',(req,res)=>{
    res.send("contact page")
})
app.get('/home',(req,res)=>{
    res.send("home page")
})


 /* -------------------------------- callbacks ------------------------------- */
app.get("/onecall",(req,res)=>{
    res.send("one call back")
})

// more than one callback 
app.get("/oneormorecall",(req,res,next)=>{
    console.log("first callback");
    next();
},(req,res)=>{
    res.send("more than one call back ")
    console.log("second call back");
})


/* ---------------------------  array of callback -------------------------- */
const cb1 = (req,res,next)=>{
    console.log("cb1");
    next()
}
const cb2 = (req,res,next)=>{
    console.log("cb2");
    next()
}
const cb3 = (req,res,next)=>{
    console.log("cb3");
    next()
}
const cb4 = (req,res)=>{
    console.log("cb4");
    res.send("array of callback")
}
app.get('/arraycb',[cb1,cb2,cb3,cb4])





/* ------------------------- chained route callbacks ------------------------ */

app.route('/stu') //multiple request on one path
.get((req,res)=>{
    res.send("get all student")
})
.post((req,res)=>{
    res.send("create  student")
})
.put((req,res)=>{
    res.send("update student")
})
.delete((req,res)=>{
    res.send("delete  atudent")
})

// chained route with all
app.route('/chi')
.all((req,res,next)=>{
    // also we can validate something on all req in this path
    console.log("Auth or preprocessing");
    next()
}) //multiple request on one path
.get((req,res)=>{
    res.send("get all teacher")
    console.log("get method teacher");
})
.post((req,res)=>{
    res.send("create teacher")
    console.log("post method teacher");
})
.put((req,res)=>{
    res.send("update teacher")
    console.log("put method teacher");
})
.delete((req,res)=>{
    res.send("delete teacher")
    console.log("delete method teacher");
})

// other undefined paths 
app.all("*",(req,res)=>{
    res.send("shi path likh vro")
})

/* ------------------------------ server listen ----------------------------- */
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})