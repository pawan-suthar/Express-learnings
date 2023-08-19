import path from 'path'

const home = (req,res)=>{
    res.sendFile(path.join(process.cwd(),"Learnviews","view","home.html"))
}

export {home}   