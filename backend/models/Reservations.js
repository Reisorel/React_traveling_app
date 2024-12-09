const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Importation de la connexion à la base de données

const Reservations = sequelize.define(
  "Reservations",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Définit "id" comme clé primaire
      autoIncrement: true, // L'ID s'auto-incrémente
      allowNull: false, // L'ID ne peut pas être NULL
    },
    created_at: {
      type: DataTypes.TIME, // Utilisation de TIME pour une heure avec fuseau
      allowNull: true, // Peut être NULL
    },
    updated_at: {
      type: DataTypes.TIME, // Utilisation de TIME pour une heure avec fuseau
      allowNull: true, // Peut être NULL
    },
    status: {
      type: DataTypes.ENUM("planned", "completed", "canceled"), // Enumération pour le statut
      allowNull: true, // Peut être NULL
    },
    travel_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Peut être NULL
      references: {
        model: "Travels", // Nom du modèle associé
        key: "id", // Colonne de la clé étrangère
      },
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Peut être NULL
      references: {
        model: "Users", // Nom du modèle associé
        key: "id", // Colonne de la clé étrangère
      },
    },
  },
  {
    tableName: "Reservations", // Forcer le nom de table exact
    timestamps: false, // Désactiver `createdAt` et `updatedAt`
    underscored: true, // Utiliser des noms de colonnes en snake_case
  }
);

module.exports = Reservations;
