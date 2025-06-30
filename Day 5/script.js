let isPasswordVisible = false;

let passwordIcon = document.querySelector(".icon");

let passwordField = document.querySelector("#password");

if (passwordField.value.trim().length > 0) {
  passwordIcon.style.display = "inline";
}

const toggleButton = document.querySelector(".toggle-password-icon");

passwordField.addEventListener("input", (e) => {
  e.target.value.trim().length > 0
    ? (passwordIcon.style.display = "inline")
    : (passwordIcon.style.display = "none");
});

toggleButton.addEventListener("click", () => {
  isPasswordVisible = !isPasswordVisible;
  let imageSrc = isPasswordVisible
    ? "https://img.icons8.com/material-sharp/24/hide.png"
    : "https://img.icons8.com/ios-glyphs/30/visible--v1.png";

  let passwordFieldType = isPasswordVisible ? "text" : "password";
  passwordIcon.setAttribute("src", imageSrc);
  passwordField.setAttribute("type", passwordFieldType);
});
