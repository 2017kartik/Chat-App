var socket = io();

let btn = document.getElementById("btn");
btn.onclick = function exec() {
  socket.emit("From_Client");
};

socket.on("From_Server", () => {
  const div = document.createElement("div");
  div.innerHTML = "New event from the server";
  document.body.appendChild(div);
});
