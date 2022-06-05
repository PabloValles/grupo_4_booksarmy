module.exports = (sequelize, dataTypes) => {
  let alias = "UserCategory";
  let cols = {
    id: {
      type: dataTypes.int(11).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
  };
  let config = {
    timestamps: true,
    deletedAt: false,
  };

  const UserCategory = sequelize.define(alias, cols, config);

  // Terminar asociaciones MAÑANAA
  UserCategory.associate = (models) => {
    // Relación HASMAHY
  };

  return UserCategory;
};
