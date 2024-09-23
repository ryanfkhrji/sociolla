const valid_name = localStorage.getItem("register_name");
const valid_email = localStorage.getItem("register_email");
const valid_password = localStorage.getItem("register_password");

const login_email = localStorage.getItem("login_email");
const login_password = localStorage.getItem("login_password");

const logout_button = document.getElementById("logout-btn");
const delete_button = document.getElementById("delete-btn");

window.onload = function () {
  if ((login_email, login_password === null)) {
    alert("Login first!!");
    window.location = "login.html";
    return false;
  }
}

logout_button.addEventListener("click", function () {
  localStorage.removeItem("login_email");
  localStorage.removeItem("login_sandi");
  window.location = "login.html";
});

delete_button.addEventListener("click", function () {
  localStorage.removeItem("register_name");
  localStorage.removeItem("register_email");
  localStorage.removeItem("register_sandi");
  localStorage.removeItem("login_email");
  localStorage.removeItem("login_sandi");
  window.location = "registrasi.html";
});
