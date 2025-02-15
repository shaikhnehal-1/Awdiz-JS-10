let emailList = [];

function login() {
  const email = document.getElementById("email").value;

  if (email) {
    emailList.push(email);

    saveToLocalStorage(email);

    displayEmails();

    console.log(`${email}`);
  } else {
    alert("Please enter a valid email");
  }
}

function displayEmails(){
  const emailsContainer = document.getElementById('emailsLogged');
  emailsContainer.innerHTML = '';

  emailList.forEach((email, index) => {
    const emailItem = document.createElement('p');
    emailItem.textContent = `${email}`;
    emailsContainer.appendChild(emailItem);
  })
}

function saveToLocalStorage(email) {
  // Get the next available index in localStorage
  const index = localStorage.length;  // This uses the number of stored items as the key index

  // Save the email with a unique key
  localStorage.setItem(`user_no_${index}`, email);

  // Log the saved email in the application console
  console.log(`Email saved in localStorage: email_${index} = ${email}`);
}