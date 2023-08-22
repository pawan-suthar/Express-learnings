import Student from "../models/StudentModel.js";

//home
const home = (req, res) => {
  res.send(
    "student api home page  <a href='https://documenter.getpostman.com/view/16671987/2s9Y5TyPsi' target='_blank'>Postman Doc Link</a>"
  );
};

//create stu
const createstudent = async (req, res) => {
  const { name, age, class: studentClass } = req.body;

  try {
    // Check if a student with the same details already exists
    const existingStudent = await Student.findOne({
      name,
      age,
      class: studentClass,
    });

    if (existingStudent) {
      return res.status(400).json({ message: "Student already registered." });
    }

    const stu = new Student({
      name,
      age,
      class: studentClass,
    });

    try {
      const stucreated = await stu.save();
      res.send(stucreated);
    } catch (error) {
      res.send(error);
    }
  } catch (error) {
    res.send(error);
  }
};

//get all stu
const allstudent = async (req, res) => {
  try {
    const allstudent = await Student.find();
    res.status(200).json(allstudent);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// stu by id
const serchstudentbyid = async (req, res) => {
  try {
    const stu = await Student.findById(req.params.id);

    if (!stu) {
      return res.status(404).json({ message: "Student not found." });
    }

    res.json(stu);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// update by id
const updatestudentbyid = async (req, res) => {
  try {
    const updatedstu = await Student.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
      },
      { new: true }
    );
    if (!updatedstu) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.json(updatedstu);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

//delete by  id
const deletestudentbyid = async (req, res) => {
  try {
    const deletedstu = await Student.findByIdAndDelete(req.params.id);

    if (!deletedstu) {
      return res.status(404).json({ message: "Student not found." });
    }

    res.json(deletedstu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

export {
  createstudent,
  allstudent,
  serchstudentbyid,
  updatestudentbyid,
  deletestudentbyid,
  home,
};
