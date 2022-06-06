module.exports = (sequelize, DataTypes) => {
  let alias = "UserCategory";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  };
  let config = {
    tableName: "user_categories",
    timestamps: false,
  };

  const UserCategory = sequelize.define(alias, cols, config);

  UserCategory.associate = function (models) {
    UserCategory.hasMany(models.User, {
      as: "usuarios",
      foreignKey: "category_id",
    });
  };

  return UserCategory;
};
