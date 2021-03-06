const fs = require("fs");
const path = require("path");

const User = {
  fileName: path.join(__dirname, "../data/users.json"),

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },

  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },

  findAll: function () {
    return this.getData();
  },

  findByPk: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser.id == id);
    return userFound;
  },

  findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser[field] === text);
    return userFound;
  },

  create: function (userToCreate) {
    let allUsers = this.findAll();
    let newUser = {
      id: this.generateId(),
      ...userToCreate,
    };

    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));

    return newUser;
  },

  update: function (userToUpdate) {
    let allUsers = this.findAll();

    let newUsers = allUsers.map((user) => {
      if (user.id == userToUpdate.id) {
        user = userToUpdate;
      }

      return user;
    });

    // Sobreescribimos la DB
    let editUserDb = fs.writeFileSync(
      this.fileName,
      JSON.stringify(newUsers, null, " ")
    );

    if (editUserDb) {
      return newUsers;
    }

    return null;
  },

  delete: function (userToDelete) {
    let allUsers = this.findAll();

    let newUsers = allUsers.filter((user) => user.id != userToDelete.id);

    // Sobreescribimos la DB
    let editUserDb = fs.writeFileSync(
      this.fileName,
      JSON.stringify(newUsers, null, " ")
    );

    return newUsers;
  },
};

module.exports = User;
