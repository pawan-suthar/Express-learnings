import path from 'path'

const about = (req,res)=>{
    res.sendFile(path.join(process.cwd(),"Learnviews","view","about.html"))
}

export {about}