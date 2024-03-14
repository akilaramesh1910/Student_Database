const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName:{
        type : "Akila",
        required : true,
        trim : true,
    },
    lastName:{
        type : "Ramesh",
        required : true,
        trim : true,
    },
    email:{
        type : "akilaramesh1910@gmail.com",
        required : true,
        trim : true,
        unique:true,
        lowercase : true,
    },
    role: {
        type: "Student",
        enum: ["Student","Person"],
        default: "Student",
    },
});

const  User = mongoose.model("User",UserSchema);

module.exports = User;