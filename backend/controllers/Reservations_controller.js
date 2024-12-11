const Reservations = require("../models/Reservations");
const Travels = require("../models/Travels");
const Users = require("../models/Users");

// Get All User
const getAllReservations = async (req, res) => {
  try {
    console.log("Fetching reservations from database...");

    // Récupérer tous les utilisateurs avec les champs souhaités
    const reservations = await Reservations.findAll({
      attributes: [
        "id",
        "status",
        "travel_id",
        "client_id",
        "created_at",
        "updated_at",
      ],
    });

    reservations.forEach((reservation) => {
      console.log("Fetched reservation:", reservation.dataValues);
    });

    res.status(200).json({
      message: "List of all reservations",
      reservations,
    });
  } catch (error) {
    console.error("Error fetching reservations:", error);

    res.status(500).json({ message: "Error fetching reservations", error });
  }
};

// Creating user
const createReservation = async (req, res) => {
  try {
    const { travel_id, client_id, status } = req.body;

    if (!travel_id || !client_id || !status) {
      return res.status(400).json({ message: "Missing property" });
    }
    console.log("Received data for reservation creation", {
      travel_id,
      client_id,
      status,
    });

    // Vérification si le client existe
    const client = await Users.findByPk(client_id);
    if (!client) {
      return res
        .status(404)
        .json({ message: `Client with id ${client_id} not found` });
    }

    // Vérification si le voyage existe
    const travel = await Travels.findByPk(travel_id);
    if (!travel) {
      return res
        .status(404)
        .json({ message: `Travel with id ${travel_id} not found` });
    }

    console.log("Creating reservation model instance...");
    // Création de la réservation
    const reservation = await Reservations.create({
      travel_id, // Association au voyage existant
      client_id, // Association au client existant
      status,
    });

    console.log(`Reservation created with id: ${reservation.id}`);
    res.status(201).json({
      message: "Reservation created successfully",
      reservation: {
        travel_id: reservation.travel_id,
        client_id: reservation.client_id,
        status: reservation.status,
      },
    });
  } catch (error) {
    console.log("Error creating reservation", error);
    res.status(500).json({ message: "Error creating reservation", error });
  }
};

// Delete reservation
const deleteReservation = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { id } = req.params;

    const reservation = await Reservations.findByPk(id);
    if (!reservation) {
      console.log(`Reservations with ID ${id} not found.`);
      return res
        .status(404)
        .json({ message: `Reservations with ID ${id} not found` });
    }

    console.log(`Deleting reservation with ID: ${id}...`);

    await Reservations.destroy({ where: { id } });

    console.log(`Reservation with ID ${id} has been successfully deleted.`);
    res.status(200).json({
      message: `Reservation with ID ${id} has been successfully deleted.`,
    });
  } catch (error) {
    console.error("Error during the deleting process:", error);
    res.status(500).json({ message: "Error deleting reservation", error });
  }
};

// Update reservation
const updateReservation = async (req, res) => {
  try {
    const { id } = req.params; // Récupérer l'ID de la réservation.
    const { travel_id, client_id, status } = req.body; // Données à modifier

    console.log(`Attempting to modify travel with ID: ${id}`);
    console.log("Received data for modification:", {
      travel_id,
      client_id,
      status,
    });

    // Check if travel exists
    const reservation = await Reservations.findByPk(id);
    if (!reservation) {
      console.log(`Reservation with ID ${id} not found.`);
      return res.status(404).json({ message: "Reservation not found!" });
    }
    // Check if new travel_id exists
    if (travel_id) {
      const travel = await Travels.findByPk(travel_id);
      if (!travel) {
        return res
          .status(404)
          .json({ message: `Travel with ID ${travel_id} not found` });
      }
    }

    // Check if new client_id exists
    if (client_id) {
      const client = await Users.findByPk(client_id);
      if (!client) {
        return res
          .status(404)
          .json({ message: `Client with ID ${client_id} not found` });
      }
    }

    // Log des données avant modification
    console.log("Current data before modification:", reservation.dataValues);
    // Mettre à jour les champs
    await reservation.update({ travel_id, client_id, status });
    // Log des données après modification (uniquement les `dataValues`)
    console.log(
      `Travel with ID ${id} successfully updated:`,
      reservation.dataValues
    );

    // Retourner une réponse
    res.status(200).json({
      message: "Reservation successfully updated",
      reservation: reservation.dataValues,
    });
  } catch (error) {
    console.error("Error during reservation update:", error);

    // Gestion des erreurs inattendues
    res.status(500).json({ message: "Error updating reservation", error });
  }
};

module.exports = {
  getAllReservations,
  createReservation,
  deleteReservation,
  updateReservation,
};
