module.exports = (sequelize, DataTypes) => {
  let alias = "formatos";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: "format",
    timestamps: false,
  };

  const Format = sequelize.define(alias, cols, config);

  Format.associate = function (models) {
    Format.belongsToMany(models.libros, {
      as: "libros",
      through: "book_format", // Nombre de tabla o alias del modelo????
      foreignKey: "format_id",
      otherKey: "book_id",
      timestamps: false,
    });
  };

  return Format;
};
