window.addEventListener("load", function (e) {
  let form = document.querySelector("#frm_create");

  function checkFileExtension(img) {
    let image = img.value;
    let extension = image.substring(image.lastIndexOf(".") + 1);
    return extension;
  }

  form.addEventListener("submit", function (e) {
    let errores = [];
    let first_name = document.querySelector("#first_name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let image = document.querySelector("#image");
    let ulErrores = document.querySelector(".errores ul");

    if (validator.isEmpty(first_name.value)) {
      errores.push("Debes un ingresar un nombre");
    } else if (first_name.value.length <= 2) {
      errores.push("El nombre debe tener más de 2 caracteres");
    }

    if (validator.isEmpty(email.value)) {
      errores.push("Debes completar tu email");
    } else if (!validator.isEmail(email.value)) {
      errores.push("Debes ingresar un email válido");
    }

    if (password.value == "") {
      errores.push("Debes completar tu password");
    } else if (password.value.length <= 8) {
      errores.push("La contraseña debe tener más de 8 caracteres");
    }

    if (!image.value) {
      console.log("debes seleccionar una imagen");
      errores.push("Debes seleccionar una imagen");
    } else if (image.value) {
      let formatosPermitidos = ["jpg", "jpeg", "png", "gif"];
      let formatoImagenSubida = checkFileExtension(image);

      let verificacion = formatosPermitidos.find(
        (format) => format === formatoImagenSubida
      );

      if (verificacion) {
        console.log("formato válido");
      } else {
        errores.push("Los formatos aceptados son: jpg, jpeg, png o gif ");
      }
    }

    if (errores.length > 0) {
      e.preventDefault();

      ulErrores.parentElement.classList.remove("hidden");
      errores.forEach((err) => {
        console.log(ulErrores);
        ulErrores.innerHTML += `<li> ${err} </li>`;
      });
      setTimeout(function () {
        ulErrores.innerHTML = "";
        ulErrores.parentElement.classList.add("hidden");
      }, 6000);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Errores: ${errores}`,
      });
    } else {
      form.submit();
    }
  });
});
