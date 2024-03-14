const Student = require("../models/student.model");

async function getAllStudents(request, reply){
    try {
        const students = await Student.find();

        let allStudents = students.map((student) => {
            return { id:student._id, firstName: student.firstName, lastName: student.lastName, email:student.email, role:student.role }
        })

        reply.send(allStudents);
    } catch (error) {
        reply.status(500).send(error);
    }
}
async function getStudentById(request, reply){
    try {
        const student = await Student.findById(request.params.id)
        reply.send(student);
    } catch (error) {
        reply.status(500).send(error);
    }
}
async function createStudent(request, reply){
    try {
        const student = new Student(request.body)
        const result = await student.save()
        reply.send(result);
    } catch (error) {
        reply.status(500).send(error);
    }
}
async function updateStudent(request, reply){
    try {
        const student = await Student.findByIdAndUpdate(request.params.id, request.body, {new:true, });
        reply.send(student);
    } catch (error) {
        reply.status(500).send(error);
    }
}
async function deleteStudent(request, reply){
    try {
        await Student.findByIdAndDelete(request.params.id);
        reply.status(204).send("");
    } catch (error) {
        reply.status(500).send(error);
    }
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};