const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Importation de la connexion à la base de données

const Travels = sequelize.define(
  "Travels",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING, // Titre du voyage
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING, // Description détaillée
      allowNull: true,
    },
    img_src: {
      type: DataTypes.STRING, // URL de l'image associée au voyage
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING, // Localisation de la destination
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING, // Catégorie du voyage
      allowNull: false,
    },
    fees: {
      type: DataTypes.INTEGER, // Coût du voyage en entier
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER, // Référence à l'utilisateur ayant créé le voyage
      allowNull: true,
      references: {
        model: "Users", // Table liée
        key: "id", // Clé primaire de la table Users
      },
    },
  },
  {
    tableName: "Travels",
    timestamps: true, // Gère automatiquement `created_at` et `updated_at`
    underscored: true, // Utilise snake_case pour les noms des colonnes
  }
);

module.exports = Travels;

