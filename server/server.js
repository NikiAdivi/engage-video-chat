require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require('path')
const port = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);
const Routes = require("./app/routes");

app.use([
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
  Routes,
]);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../video-client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../video-client/build', 'index.html'));
});

const io = (module.exports.io = require('socket.io')(server, {
  cors: {
      origin: '*',
  }
}));

const socketManager = require("./app/socketManager");
io.on("connection", socketManager);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});