const io = require("./../server").io;

module.exports = (socket) => {
  try {
    console.log("Connected");
    socket.on("join-room", (data, participants, callback) => {
      socket.broadcast.emit("user-connected", data);
    });
  } catch (ex) {
    console.log(ex.message);
  }
};
