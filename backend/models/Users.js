const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user", "guest"),
      allowNull: false,
    },
  },
  {
    tableName: "Users",
    timestamps: true, // Sequelize gère automatiquement `created_at` et `updated_at`
    underscored: true, // Utilise `created_at` et `updated_at` en snake_case
  }
);

module.exports = Users;

