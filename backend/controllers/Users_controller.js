const Users = require("../models/Users");

// Get all Users
const getAllUsers = async (req, res) => {
  try {
    console.log("Fetching users from database...");

    // Récupérer tous les utilisateurs avec les champs souhaités
    const users = await Users.findAll({
      attributes: ['id', 'name', 'surname', 'email', 'role', 'createdAt', 'updatedAt'] // Inclure les champs nécessaires
    });

    // Vérifier s'il y a des utilisateurs
    if (!users.length) {
      console.log("No users currently present");
      return res.status(404).json({ message: "No users found" });
    }

    // Log les utilisateurs de manière lisible
    users.forEach(user => {
      console.log("Fetched user:", user.dataValues);
    });

    // Retourner une réponse propre
    res.status(200).json({
      message: "List of all users",
      users, // Retourner uniquement les données pertinentes
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    // Gestion des erreurs
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// Create new User
const createUser = async (req, res) => {
  try {
    const { name, surname, email, password, role } = req.body;

    if (!name || !surname || !email || !password || !role) {
      return res.status(400).json({ message: "missing property" });
    }

    // check if mail is already used :
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    console.log("Received data for user creation:", {
      name,
      surname,
      email,
      password,
      role,
    });

    console.log("Creating user model instance...");
    const user = await Users.create({
      name,
      surname,
      email,
      password,
      role,
    });
    console.log(user.createdAt, user.updatedAt);

    console.log(`User created with id: ${user.id}`);
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        created_at: user.created_at,
      },
    });
  } catch (error) {
    console.log("Error creating user", error);
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    // Get ID params from body
    console.log("Request body:", req.body);
    const { id } = req.params;

    // Check if user exists :
    const user = await Users.findByPk(id);
    if (!user) {
      console.log(`User with ID ${id} not found.`);
      return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    console.log(`Deleting user with ID: ${id}...`);


    await Users.destroy({ where: { id } });

    console.log(`User with ID ${id} has been successfully deleted.`);
    res.status(200).json({
      message: `User with ID ${id} has been successfully deleted.`,
    });
  } catch (error) {
    console.error("Error during the deleting process:", error);
    res.status(500).json({ message: "Error deleting user", error });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID de l'utilisateur
    const { name, surname, email, password, role } = req.body; // Données à modifier

    console.log(`Attempting to modify user with ID: ${id}`);
    console.log("Received data for modification:", { name, surname, email, password, role });

    // Vérifier si l'utilisateur existe
    const user = await Users.findByPk(id);
    if (!user) {
      console.log(`User with ID ${id} not found.`);
      return res.status(404).json({ message: "User not found!" });
    }

    // Log des données avant modification
    console.log("Current data before modification:", user.dataValues);

    // Mettre à jour les champs
    await user.update({ name, surname, email, password, role });

    // Log des données après modification (uniquement les `dataValues`)
    console.log(`User with ID ${id} successfully updated:`, user.dataValues);

    // Retourner une réponse propre sans métadonnées inutiles
    res.status(200).json({
      message: "User successfully updated",
      user: user.dataValues, // Retourner uniquement les données utiles
    });
  } catch (error) {
    console.error("Error during user update:", error);

    // Gestion des erreurs Sequelize (par exemple, email déjà utilisé)
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ message: "Email already in use" });
    }

    // Gestion des erreurs inattendues
    res.status(500).json({ message: "Error updating user", error });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
};
