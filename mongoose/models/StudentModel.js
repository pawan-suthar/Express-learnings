import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
  name:{type:String},
  age:{type:Number},
  class:{type:String}

})

const Student = mongoose.model("Student", studentSchema);



export default Student;