// Authentication JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Login Form Handling
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const userType = document.getElementById("userType").value;

      // Simple validation
      if (!email || !password || !userType) {
        alert("Please fill in all fields");
        return;
      }

      // In a real application, this would be an AJAX call to the server
      console.log("Login attempt:", { email, password, userType });

      // For demo purposes, redirect to properties page
      window.location.href = "properties.html";
    });
  }

  // Registration Form Handling
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const userType = document.getElementById("userType").value;
      const firstName = document.getElementById("firstName").value;
      const middleName = document.getElementById("middleName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      // Validation
      if (
        !userType ||
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !address ||
        !password ||
        !confirmPassword
      ) {
        alert("Please fill in all required fields");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // In a real application, this would be an AJAX call to the server
      console.log("Registration data:", {
        userType,
        firstName,
        middleName,
        lastName,
        email,
        phone,
        address,
        password,
      });

      // For demo purposes, redirect to login page
      alert("Registration successful! Please login.");
      window.location.href = "login.html";
    });
  }
});
