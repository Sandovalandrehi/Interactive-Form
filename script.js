
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const successMessage = document.getElementById("successMessage");

// funcion para mostrar errores
function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.display = "block";
  input.style.borderColor = "red";
}

// funcion para mostrar el exito
function showSuccess(input) {
  const error = input.nextElementSibling;
  error.textContent = "";
  error.style.display = "none";
  input.style.borderColor = "green";
}

// validaciones en tiempo real
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim().length < 3) {
    showError(nameInput, "The name must have at least 3 characters");
  } else {
    showSuccess(nameInput);
  }
});

emailInput.addEventListener("input", () => {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!regex.test(emailInput.value.trim())) {
    showError(emailInput, "Invalid email");
  } else {
    showSuccess(emailInput);
  }
});

phoneInput.addEventListener("input", () => {
  const regex = /^[0-9]{10}$/;
  if (!regex.test(phoneInput.value.trim())) {
    showError(phoneInput, "The phone number must have 10 digits");
  } else {
    showSuccess(phoneInput);
  }
});

// evitar envio si hay errores
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = document.querySelectorAll(".error");
  let valid = true;
  errors.forEach(err => {
    if (err.textContent !== "") {
      valid = false;
    }
  });

  if (valid) {
    successMessage.textContent = "Form sent successfully";
    successMessage.style.display = "block";
    form.reset(); // limpiar el formulario y resetear estilos
    [nameInput, emailInput, phoneInput].forEach(input => {
      input.style.borderColor = "#ccc";
    });
  } else {
    successMessage.style.display = "none";
  }
});
