module.exports = (sequelize, DataTypes) => {
  const alias = "autores";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  };
  const config = {
    tableName: "author",
    timestamps: false,
  };

  const Author = sequelize.define(alias, cols, config);

  Author.associate = function (models) {
    Author.hasMany(models.Books, {
      as: "books",
      foreignKey: "autor_id",
    });
  };

  return Author;
};
