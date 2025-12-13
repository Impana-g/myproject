function showMessage() {
  document.getElementById("result").innerText =
    "Button clicked! JavaScript is working.";
}

function sayHello() {
  document.getElementById("result").innerText =
    "Hello! Thanks for visiting my project.";
}

function greetUser() {
  const name = document.getElementById("nameInput").value;

  if (name === "") {
    document.getElementById("result").innerText =
      "Please enter your name!";
  } else {
    document.getElementById("result").innerText =
      "Welcome, " + name + "! 👋";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showDateTime() {
  const now = new Date();
  document.getElementById("dateTime").innerText =
    "Current Date & Time: " + now.toLocaleString();
}

// Show date & time on page load
showDateTime();
