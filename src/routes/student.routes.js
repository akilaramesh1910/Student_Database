const studentController = require("../controllers/student.controller");

async function routes(fastify, options) {
    fastify.get("/",studentController.getAllStudents);
    fastify.get("/:id",studentController.getStudentById);
    fastify.post("/",studentController.createStudent);
    fastify.put("/:id",studentController.updateStudent);
    fastify.delete("/:id",studentController.deleteStudent);
}

module.exports = routes;