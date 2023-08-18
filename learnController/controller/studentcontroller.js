//student controller inside controller folder

// controller can group related request handling logic seprately 
// insted of defining all logic in one file so we seprate logic in controller folder 
// to organize our folder and behavior of webapp

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