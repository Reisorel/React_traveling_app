const Travels = require("../models/Travels");
const Users = require("../models/Users");

// Get all Travels
const getAllTravels = async (req, res) => {
  try {
    console.log("Fetching travels from database...");

    const travels = await Travels.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "img_src",
        "location",
        "grade",
        "fees",
        "created_at",
        "updated_at",
        "created_by",
      ],
    });

    if (!travels.length) {
      console.log("No travels currently present");
      return res.status(404).json({ message: "No travels found" });
    }

    travels.forEach((travel) => {
      console.log("Fetched travel:", travel.dataValues);
    });

    res.status(200).json({
      message: "List of all travels",
      travels,
    });
  } catch (error) {
    console.error("Error fetching travels:", error);

    res.status(500).json({ message: "Error fetching travels", error });
  }
};

// Create Travel
const createTravel = async (req, res) => {
  try {
    const { title, description, img_src, location, grade, fees, created_by } =
      req.body;

    if (
      !title ||
      !description ||
      !img_src ||
      !location ||
      !grade ||
      !fees ||
      !created_by
    ) {
      return res.status(400).json({ message: "Missing property" });
    }

    console.log("Received data for travel creation:", {
      title,
      description,
      img_src,
      location,
      grade,
      fees,
      created_by,
    });

    const user = await Users.findByPk(created_by);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with id ${created_by} not found` });
    }

    console.log("Creating travel model instance...");
    const travel = await Travels.create({
      title,
      description,
      img_src,
      location,
      grade,
      fees,
      created_by,
    });

    console.log(`Travel created with id: ${travel.id}`);
    res.status(201).json({
      message: "Travel created successfully",
      travel: {
        id: travel.id,
        title: travel.title,
        description: travel.description,
        img_src: travel.img_src,
        location: travel.location,
        grade: travel.grade,
        fees: travel.fees,
        created_by: travel.created_by,
      },
    });
  } catch (error) {
    console.log("Error creating travel", error);
    res.status(500).json({ message: "Error creating travel", error });
  }
};

// Delete Travel
const deleteTravel = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { id } = req.params;

    const travel = await Travels.findByPk(id);
    if (!travel) {
      console.log(`Travel with ID ${id} not found.`);
      return res
        .status(404)
        .json({ message: `Travel with ID ${id} not found` });
    }

    console.log(`Deleting travel with ID: ${id}...`);

    await Travels.destroy({ where: { id } });

    console.log(`Travel with ID ${id} has been successfully deleted.`);
    res.status(200).json({
      message: `Travel with ID ${id} has been successfully deleted.`,
    });
  } catch (error) {
    console.error("Error during the deleting process:", error);
    res.status(500).json({ message: "Error deleting travel", error });
  }
};

// Update travel
const updateTravel = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID de l'utilisateur
    const { title, description, img_src, location, grade, fees, created_by, } = req.body; // Données à modifier

    console.log(`Attempting to modify travel with ID: ${id}`);
    console.log("Received data for modification:", { title, description, img_src, location, grade, fees, created_by, });

    // Check if travel exists
    const travel = await Travels.findByPk(id);
    if (!travel) {
      console.log(`Travel with ID ${id} not found.`);
      return res.status(404).json({ message: "Travel not found!" });
    }
    // Log des données avant modification
    console.log("Current data before modification:", travel.dataValues);

    // Mettre à jour les champs
    await travel.update({ title, description, img_src, location, grade, fees, created_by, });

    // Log des données après modification (uniquement les `dataValues`)
    console.log(`Travel with ID ${id} successfully updated:`, travel.dataValues);

    // Retourner une réponse
    res.status(200).json({
      message: "Travel successfully updated",
      travel: travel.dataValues, // Retourner uniquement les données utiles
    });
    } catch (error) {
    console.error("Error during travel update:", error);

    // Gestion des erreurs inattendues
    res.status(500).json({ message: "Error updating travel", error });
    }
  };

module.exports = {
  getAllTravels,
  createTravel,
  deleteTravel,
  updateTravel,
};
