const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const welcomeMessage = document.getElementById("welcomeMessage");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Reset errors
  emailError.textContent = "";
  passwordError.textContent = "";
  welcomeMessage.textContent = "";

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email";
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    welcomeMessage.textContent = `Welcome, ${email}`;
    loginForm.reset();
  }
});
