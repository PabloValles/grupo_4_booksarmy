module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.int(11).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    first_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    category_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
  };
  let config = {
    timestamps: true,
    deletedAt: false,
  };

  const User = sequelize.define(alias, cols, config);

  // Terminar asociaciones MAÑANAA
  User.associate = (models) => {
    // Relación Belong To
  };

  return User;
};
