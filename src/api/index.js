// api/index.js
var socket = new WebSocket("ws://91.92.136.39:8090/ws");

let connect = (cb) => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = msg => {
    cb(msg)
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = msg => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };