window.addEventListener("load", function () {
  let form = document.querySelector("#frm_login");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = [];
    let email = document.querySelector("#email");
    let ulErrores = document.querySelector(".errores ul");
    let password = document.querySelector("#password");

    if (validator.isEmpty(email.value)) {
      errores.push("Debes completar tu email");
    } else if (!validator.isEmail(email.value)) {
      errores.push("Debes ingresar un email válido");
    }

    if (password.value == "") {
      errores.push("Debes completar tu password");
    }

    if (errores.length > 0) {
      e.preventDefault();
      console.log(errores);

      errores.forEach((err) => {
        console.log(ulErrores);
        ulErrores.innerHTML += `<li> ${err} </li>`;
      });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Errores: ${errores}`,
      });
    }
  });
});
