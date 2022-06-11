window.addEventListener("load", function (e) {
  let frmDelete = document.querySelectorAll("#frm_delete");

  for (const frm of frmDelete) {
    frm.addEventListener("submit", (e) => {
      e.preventDefault();
      let formData = new FormData(frm);
      let user_id = formData.get("user_id");

      Swal.fire({
        title: "Desea eliminar el usuario?",
        text: "* Esta acción no se podrá deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Eliminado!",
            "Ha eliminado el usuario: " + user_id,
            "success"
          );

          // Eliminar el usuario:
          let ruta = "/users/delete/" + user_id + "/?_method=DELETE";
          let settings = {
            method: "POST",
            headers: {
              contentType: "aplication/json",
            },
          };
          fetch(ruta, settings)
            .then((response) => response.json())
            .then((info) => {
              window.location.href = "/users/";
            })
            .catch((e) => {
              window.location.href = "/users/";
              console.log("Errorrrr", e);
            });
        }
      });
    });
  }
});
