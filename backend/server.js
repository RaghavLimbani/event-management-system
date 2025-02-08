const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
// const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {cors: { orgigin: "*"}});

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.route.js"));
app.use("/api/events", require("./routes/event.route.js"));

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinEvent", (eventId) => {
        socket.join(eventId);
    });

    socket.on("newAttendee", (eventId) => {
        io.to(eventId).emit("updateAttendees");
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));