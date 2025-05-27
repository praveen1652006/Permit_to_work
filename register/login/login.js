document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    alert(`Email: ${email}\nPassword: ${password}`);
  });

document.getElementById("backbtn").addEventListener("click", function () {
  window.location.href = "login.html";
});
