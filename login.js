let loginForm = document.getElementById("loginform");
let loginEmail = document.getElementById("loginemail");
let loginPassword = document.getElementById("loginpassword");

loginForm.reset();

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginValidation();
});

const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  if (error) {
    error.innerHTML = `<span style="font-size: 0.8em;">${msg}</span>`;
    box.classList.add("error");
    box.classList.remove("success");
  } else {
    console.error("Error element not found");
  }
};

const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  if (error) {
    error.innerText = "";
    box.classList.add("success");
    box.classList.remove("error");
  } else {
    console.error("Error element not found");
  }
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

function loginValidation() {
  let loginMail = loginEmail.value.trim();
  let loginPass = loginPassword.value.trim();

  let users = JSON.parse(localStorage.getItem("Users")) || [];
  console.log("Users from localStorage:", users);

  if (loginMail === "") {
    setError(loginEmail, "Email is required");
  } else if (!mailFormat(loginMail)) {
    setError(loginEmail, "Please enter a valid email");
  } else {
    setSuccess(loginEmail);
  }

  if (loginPass === "") {
    setError(loginPassword, "Password is required");
  } else if (!passFormat(loginPass)) {
    setError(loginPassword, "Password is not of proper format");
  } else {
    setSuccess(loginPassword);
  }

  if (document.querySelectorAll(".error span").length === 0) {
    const user = users.find(
      (u) => u.email === loginMail && u.password === loginPass
    );
    console.log("User found:", user);
    if (user) {
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      setError(loginEmail, "Invalid email or password");
      setError(loginPassword, "");
    }
  }
}
