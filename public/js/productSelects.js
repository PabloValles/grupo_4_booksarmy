new TomSelect("#name-autor", {
  //create: true,
  sortField: {
    field: "text",
    direction: "asc",
  },
});

new TomSelect("#genero", {
  maxItems: 4,
});

new TomSelect("#formato", {
  maxItems: 2,
});
