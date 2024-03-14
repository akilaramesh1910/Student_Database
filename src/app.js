const fastify = require("fastify")({ logger : true});
const mongoose = require("mongoose");
require('dotenv').config();

// Import my routes
const studentRoutes = require ("./routes/student.routes");
// Connect to my database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>
    console.log("Connected to the database!!!")
).catch((e) => {
    console.log("Error connecting to database",e)
});
// Start my server
fastify.register(studentRoutes, { prefix : "/api/v1/students" });

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 5000)
        fastify.log.info(
            `Server is running on port ${fastify.server.address().port}`
        );
    } catch (error) {
        
    };
}

start();