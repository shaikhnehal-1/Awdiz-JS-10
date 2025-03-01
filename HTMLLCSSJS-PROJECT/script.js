function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;
  let message = document.getElementById("registerMessage");

  if (!name || !email || !password) {
    message.style.color = "red";
    message.textContent = "All fields are required!";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    message.style.color = "red";
    message.textContent = "Email already registered!";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.textContent = "Registration Successful!";
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let message = document.getElementById("loginMessage");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = users.find(user => user.email === email && user.password === password);

  if (validUser){
    message.style.color = "green";
    message.textContent = "Login Successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password!"
  }
}
