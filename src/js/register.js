const register_name = document.getElementById("name");
const register_email = document.getElementById("email");
const register_password = document.getElementById("password");
const register_btn = document.getElementById("register_btn");

const cek_reg_name = localStorage.getItem("register_name");
const cek_reg_email = localStorage.getItem("register_email");
const cek_reg_password = localStorage.getItem("register_password");
const cek_log_email = localStorage.getItem("login_email");
const cek_log_password = localStorage.getItem("login_password");

if ((cek_reg_name, cek_reg_email, cek_reg_password, cek_log_email, cek_log_password != null)) {
  window.location = "home.html";
}

register_btn.addEventListener("click", function () {
  const valid_name = localStorage.getItem("register_name");
  const valid_email = localStorage.getItem("register_email");
  const valid_password = localStorage.getItem("register_password");

  if (register_name.value === valid_name || register_email.value === valid_email || register_password.value === valid_password) {
    alert("Your account has been actived! Login Now!!");
    return false;
  }

  if ((register_name.value, register_email.value, register_password.value === "")) {
    alert("Data not valid ❌");
    localStorage.removeItem("register_name");
    localStorage.removeItem("register_email");
    localStorage.removeItem("register_password");
    return false;
  } else {
    localStorage.setItem("register_name", register_name.value);
    localStorage.setItem("register_email", register_email.value);
    localStorage.setItem("register_password", register_password.value);
    alert("Register success ✅");
    window.location = "login.html";
  }
});