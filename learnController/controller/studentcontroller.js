//student controller inside controller folder

const stu_create = (req,res)=>{
    res.send("student created")
}

const stu_delete = (req,res)=>{
    console.log(`params is ${req.params.id}`);
    const {id} = req.params
    console.log(`id is ${id}`);
//     params is 10
//     id is 10
    if(id==10){
        return res.send(`${id} is imp. not deleting`)
    }
    else{
        res.send(`deleted student id ${id}`)
    }
}
export {stu_create,stu_delete}