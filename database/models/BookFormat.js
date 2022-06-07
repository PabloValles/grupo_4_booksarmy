module.exports = (sequelize, DataTypes) => {
  let alias = "libroFormato";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    format_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    tableName: "book_format",
    timestamps: false,
  };

  const BookFormat = sequelize.define(alias, cols, config);

  return BookFormat;
};
