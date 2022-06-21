window.addEventListener("load", function (e) {
  let frmDelete = document.querySelectorAll("#frm_delete");

  for (const frm of frmDelete) {
    frm.addEventListener("submit", (e) => {
      e.preventDefault();
      let formData = new FormData(frm);
      let libro_id = formData.get("libro_id");

      Swal.fire({
        title: "Seguro desea eliminar el libro?",
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
            "Ha eliminado el libro: " + libro_id,
            "success"
          );

          let ruta =
            "/products/admin/delete/30" + libro_id + "/?_method=DELETE";
          let settings = {
            method: "POST",
            headers: {
              contentType: "aplication/json",
            },
          };
          fetch(ruta, settings)
            .then((response) => response.json())
            .then((info) => {
              window.location.href = "/products/admin";
              console.log("eliminado Correctamente");
            })
            .catch((e) => {
              //window.location.href = "/products/admin";
              console.error("Errorrrr", e);
            });
        }
      });
    });
  }
});
