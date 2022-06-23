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
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Eliminado!",
            "Ha eliminado el libro: " + libro_id,
            "success"
          );

          let ruta = `/products/admin/delete/${libro_id}/?_method=DELETE`;

          let settings = {
            method: "POST",
            headers: { contentType: "application/json" },
            //body: libro_id,
          };
          fetch(ruta, settings)
            .then((response) => response)
            .then((info) => {
              console.log("eliminado Correctamente", info);
              window.location.href = "/products/admin";
            })
            .catch((e) => console.error("Errorrrr", e));
        }
      });
    });
  }
});
//
