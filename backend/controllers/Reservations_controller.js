const Reservations = require("../models/Reservations");

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

module.exports = {
  getAllReservations,
  // createReservations,
  // deleteReservations,
  // updateReservations,
};
