const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Reservations = sequelize.define(
  "Reservations",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("planned", "completed", "canceled"),
      allowNull: true, // Peut être NULL si le statut n'est pas encore défini
    },
    travel_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Peut être NULL si le voyage n'est pas défini
      references: {
        model: "Travels", // Relation avec le modèle Travels
        key: "id", // Clé étrangère
      },
      onDelete: "CASCADE", // Supprime la réservation si le voyage est supprimé
      onUpdate: "CASCADE", // Met à jour automatiquement si l'ID change
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Peut être NULL si le client n'est pas défini
      references: {
        model: "Users", // Relation avec le modèle Users
        key: "id", // Clé étrangère
      },
      onDelete: "SET NULL", // Si le client est supprimé, met à NULL
      onUpdate: "CASCADE", // Met à jour automatiquement si l'ID change
    },
  },
  {
    tableName: "Reservations", // Nom explicite de la table
    timestamps: true, // Sequelize gère automatiquement `created_at` et `updated_at`
    underscored: true, // Utilise snake_case pour les colonnes
  }
);

module.exports = Reservations;

