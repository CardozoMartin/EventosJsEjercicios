export const validarNombre = (value, campo) => {
  // Minima long del nombre
  if (value.trim().length <= 2) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");

    return false;
  }

  // Maxima long del nombre
  if (value.trim().length >= 100) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

export const validarEmail = (value, campo) => {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Cantidad de digitos menor a 4
  if (!expresionRegular.test(value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;

};

export const validarContraseña = (value, campo) => {
    
        const lengthValid = value.length >= 8;
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);
      
        const isValid = lengthValid && hasUppercase && hasLowercase && hasSpecialChar;
      
        if (isValid) {
          campo.classList.remove("is-invalid");
          campo.classList.add("is-valid");
        } else {
          campo.classList.remove("is-valid");
          campo.classList.add("is-invalid");
        }
      
        return isValid;
      };
      
 /* if (value.length < 8) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  if (!/[A-Z]/.test(value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  if (!/[a-z]/.test(value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  return true;*/

