document
  .getElementById("accountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      alert("Account Created Successfully!");
    }
  });

function validateForm() {
  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let company = document.getElementById("company").value.trim();
  let jobRole = document.getElementById("jobRole").value.trim();
  let roleSelection = document.getElementById("roleSelection").value;
  let password = document.getElementById("password").value;
  let acceptCheckbox = document.getElementById("acceptPolicy");

  if (!fullName || /\d/.test(fullName)) {
    alert("Please enter a valid full name without numbers.");
    return false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!company) {
    alert("Please enter your company name.");
    return false;
  }

  if (!jobRole) {
    alert("Please enter your job role/designation.");
    return false;
  }

  if (!roleSelection) {
    alert("Please select your role.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  if (!acceptCheckbox.checked) {
    alert("Please accept the Privacy Policy to proceed.");
    return false;
  }

  return true;
}
