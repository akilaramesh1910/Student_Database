const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
        trim : true,
    },
    lastName:{
        type : String,
        required : true,
        trim : true,
    },
    email:{
        type : String,
        required : true,
        trim : true,
        unique:true,
        lowercase : true,
    },
    role: {
        type: String,
        enum: ["Student","Person"],
        default: "Student",
    },
});

const Student = mongoose.model("Student",StudentSchema);

module.exports = Student;