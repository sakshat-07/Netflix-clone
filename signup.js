let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
  document.getElementById("form").reset();
});

const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerHTML = `<span style="font-size: 0.8em;">${msg}</span>`;
  box.classList.add("error");
  box.classList.remove("Success");
};

const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("Success");
  box.classList.remove("error");
};

const mailFormat = (e) => {
  const re = /\w+@\w+\.\w+/;
  return re.test(String(e).toLowerCase());
};

const passFormat = (p) => {
  const re =
    /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
  return re.test(p);
};

function validation() {
  let mail = email.value.trim();
  let pass1 = password.value.trim();

  // Retrieve the current users from localStorage, or initialize an empty array if none exist
  let users = JSON.parse(localStorage.getItem("Users")) || [];

  if (mail === "") {
    setError(email, "Email is required");
  } else if (!mailFormat(mail)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }

  if (pass1 === "") {
    setError(password, "Password is required");
  } else if (!passFormat(pass1)) {
    setError(password, "Password does not match the format");
  } else {
    setSuccess(password);
  }

  // If there are no errors, store the new user details
  if (document.querySelectorAll(".error span").length === 0) {
    users.push({ email: mail, password: pass1 });
    localStorage.setItem("Users", JSON.stringify(users));
    alert("User signed up successfully!");
    window.location.href = "home.html";
  }
}
