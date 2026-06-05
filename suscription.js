const form = document.getElementById("subscriptionForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const city = document.getElementById("city");
const postalCode = document.getElementById("postalCode");
const dni = document.getElementById("dni");
const formTitle = document.getElementById("formTitle");

function showError(input, message) {
  const errorMessage = input.parentElement.querySelector(".error-message");
  errorMessage.textContent = message;
}

function clearError(input) {
  const errorMessage = input.parentElement.querySelector(".error-message");
  errorMessage.textContent = "";
}

function validateFullName() {
  const value = fullName.value.trim();

  if (value.length <= 6 || !value.includes(" ")) {
    showError(fullName, "El nombre debe tener más de 6 letras y al menos un espacio.");
    return false;
  }

  clearError(fullName);
  return true;
}

function validateEmail() {
  const value = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    showError(email, "Debe ingresar un email válido.");
    return false;
  }

  clearError(email);
  return true;
}

function validatePassword() {
  const value = password.value.trim();
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!passwordRegex.test(value)) {
    showError(password, "La contraseña debe tener al menos 8 caracteres, con letras y números.");
    return false;
  }

  clearError(password);
  return true;
}

function validateRepeatPassword() {
  if (repeatPassword.value !== password.value || repeatPassword.value === "") {
    showError(repeatPassword, "Las contraseñas deben coincidir.");
    return false;
  }

  clearError(repeatPassword);
  return true;
}

function validateAge() {
  const value = age.value.trim();
  const numberValue = Number(value);

  if (value === "" || !Number.isInteger(numberValue) || numberValue < 18) {
    showError(age, "La edad debe ser un número entero mayor o igual a 18.");
    return false;
  }

  clearError(age);
  return true;
}

function validatePhone() {
  const value = phone.value.trim();
  const phoneRegex = /^\d{7,}$/;

  if (!phoneRegex.test(value)) {
    showError(phone, "El teléfono debe tener al menos 7 dígitos, sin espacios, guiones ni paréntesis.");
    return false;
  }

  clearError(phone);
  return true;
}

function validateAddress() {
  const value = address.value.trim();
  const hasLetter = /[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpace = /\s/.test(value);

  if (value.length < 5 || !hasLetter || !hasNumber || !hasSpace) {
    showError(address, "La dirección debe tener al menos 5 caracteres, letras, números y un espacio.");
    return false;
  }

  clearError(address);
  return true;
}

function validateCity() {
  const value = city.value.trim();

  if (value.length < 3) {
    showError(city, "La ciudad debe tener al menos 3 caracteres.");
    return false;
  }

  clearError(city);
  return true;
}

function validatePostalCode() {
  const value = postalCode.value.trim();

  if (value.length < 3) {
    showError(postalCode, "El código postal debe tener al menos 3 caracteres.");
    return false;
  }

  clearError(postalCode);
  return true;
}

function validateDni() {
  const value = dni.value.trim();
  const dniRegex = /^\d{7,8}$/;

  if (!dniRegex.test(value)) {
    showError(dni, "El DNI debe tener 7 u 8 dígitos.");
    return false;
  }

  clearError(dni);
  return true;
}


fullName.addEventListener("blur", validateFullName);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
repeatPassword.addEventListener("blur", validateRepeatPassword);
age.addEventListener("blur", validateAge);
phone.addEventListener("blur", validatePhone);
address.addEventListener("blur", validateAddress);
city.addEventListener("blur", validateCity);
postalCode.addEventListener("blur", validatePostalCode);
dni.addEventListener("blur", validateDni);

const inputs = document.querySelectorAll("#subscriptionForm input");

inputs.forEach(function(input) {
  input.addEventListener("focus", function() {
    clearError(input);
  });
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const validations = [
    validateFullName(),
    validateEmail(),
    validatePassword(),
    validateRepeatPassword(),
    validateAge(),
    validatePhone(),
    validateAddress(),
    validateCity(),
    validatePostalCode(),
    validateDni()
  ];

  const formIsValid = validations.every(function(validation) {
    return validation === true;
  });

  if (formIsValid) {
    alert(
      "Formulario enviado correctamente:\n\n" +
      "Nombre completo: " + fullName.value + "\n" +
      "Email: " + email.value + "\n" +
      "Contraseña: " + password.value + "\n" +
      "Edad: " + age.value + "\n" +
      "Teléfono: " + phone.value + "\n" +
      "Dirección: " + address.value + "\n" +
      "Ciudad: " + city.value + "\n" +
      "Código Postal: " + postalCode.value + "\n" +
      "DNI: " + dni.value
    );
  } else {
    alert("El formulario tiene errores. Revisá los campos marcados.");
  }
});

fullName.addEventListener("keydown", function() {
  setTimeout(function() {
    if (fullName.value.trim() !== "") {
      formTitle.textContent = "HOLA " + fullName.value.toUpperCase();
    } else {
      formTitle.textContent = "HOLA";
    }
  }, 0);
});