const togglePass = document.getElementById("togglePass");
const passwordInput = document.getElementById("password");

togglePass.addEventListener("change", () => {
  if (togglePass.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});


// Formularios
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const forgotForm = document.getElementById("forgot-form");

// Enlaces para cambiar de formulario
document.getElementById("register-link").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});

document.getElementById("forgot-link").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  forgotForm.classList.add("active");
});

document.getElementById("back-login1").addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});

document.getElementById("back-login2").addEventListener("click", (e) => {
  e.preventDefault();
  forgotForm.classList.remove("active");
  loginForm.classList.add("active");
});

// 🔹 Simulación de login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userValido = "admin";
  const passValido = "1234";

  if (
    document.getElementById("usuario").value === userValido &&
    document.getElementById("password").value === passValido
  ) {
    window.location.href = "inicio.html"; // redirige si login es correcto
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});

// 🔹 Simulación de registro
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});

// 🔹 Simulación de recuperar contraseña
forgotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("📧 Se ha enviado un enlace a tu correo para recuperar la contraseña.");
  forgotForm.classList.remove("active");
  loginForm.classList.add("active");
});