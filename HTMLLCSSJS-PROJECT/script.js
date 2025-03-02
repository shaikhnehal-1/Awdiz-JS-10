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

  let validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (validUser) {
    message.style.color = "green";
    message.textContent = "Login successful!";

    setTimeout(() => {
      redirectToHome(validUser.name);
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password!";
  }
}

// redirect to home page after login.

function redirectToHome(username) {
  localStorage.setItem("loggedInUser", username); // here we store the user when logged in
  window.location.href = "home.html"; // this will redirect to home page after login
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html"; // redirect user to login page
}

document.addEventListener("DOMContentLoaded", function () {
  let currentpage = window.location.pathname.split("/").pop();
  let loggedInUser = localStorage.getItem("loggedInUser");
  if (currentpage === "home.html") {
    if (!loggedInUser) {
      window.location.href = "index.html";
    } else {
      document.getElementById("username").innerText = loggedInUser;
      displayProducts();
    }
  }
});

function addProduct() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  let category = document.getElementById("productCategory").value;
  let imageUrl = document.getElementById("productImage").value;
  let message = document.getElementById("productMessage");

  if (!name || !price || !category || !imageUrl) {
    message.style.color = "red";
    message.textContent = "All fields are required!";
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({ name, price, category, imageUrl });

  localStorage.setItem("products", JSON.stringify(products));

  message.style.color = "green";
  message.textContent = "Product added successfully!";

  displayProducts();
}

function displayProducts() {
  let productList = document.getElementById("productList");
  let products = JSON.parse(localStorage.getItem("products")) || [];

  productList.innerHTML = "";

  products.forEach((product) => {
    let productCard = `
        
            <div class="product">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>Price: ₹${product.price}</p>
                <p>Category: ${product.category}</p>
            </div>
        `;
    productList.innerHTML += productCard;
  });
}

if (window.location.pathname.includes("home.html")) {
  displayProducts();
}
