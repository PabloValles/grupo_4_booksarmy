module.exports = (sequelize, DataTypes) => {
  const alias = "libros";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    editorial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const config = {
    tableName: "author",
    createdAt: "created_at",
  };

  const Books = sequelize.define(alias, cols, config);

  Books.associate = function (models) {
    Books.belongsTo(models.autores, {
      as: "authors",
      foreignKey: "autor_id",
    });

    Books.belongsToMany(models.formatos, {
      as: "booksFormat",
      through: "book_format", // Nombre de tabla o alias del modelo????
      foreignKey: "book_id",
      otherKey: "format_id",
      timestamps: false,
    });
  };

  return Books;
};
