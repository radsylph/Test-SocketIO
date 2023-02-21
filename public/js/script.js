let socket = io();
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  let message = document.getElementById("message");
  let item = document.createElement("li");
  item.textContent = msg;
  console.log(item);
  message.appendChild(item);
});

socket.on("UserConnected", () => {
  let modal = document.getElementById("modal");
  let backdrop = document.getElementById("backdrop");
  modal.classList.toggle("show");
  backdrop.classList.add("opacity-100");
  setTimeout(() => {
    modal.classList.toggle("show");
    backdrop.classList.add("opacity-0");
  }, 3000);
});

//write me a function to create a dialog for 3 seconds, that says a user has been connected and disconnected

//export the function to be used in other files
